import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

type Data = {
    tailoredResume?: string;
    error?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { jobDescription, resumeText, tone } = req.body;

    if (!jobDescription || !resumeText || !tone) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const messages: ChatCompletionMessageParam[] = [
            {
                role: "system",
                content: `You are a helpful assistant that tailors resumes. Use a ${tone} tone.`,
            },
            {
                role: "user",
                content: `Given the following job description and my resume, rewrite my resume content to better match the job description. Job Description: ${jobDescription} Resume: ${resumeText}`,
            },
        ];

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages,
            max_tokens: 1500,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        const tailoredResume =
            completion.choices[0].message.content?.trim() ?? "";

        res.status(200).json({ tailoredResume });
    } catch (error: any) {
        console.error("OpenAI API error:", error);
        res.status(500).json({ error: "Failed to generate tailored resume" });
    }
}
