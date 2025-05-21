"use client";

import { extractTextFromPdf } from "@/utils/pdfExtractor";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    jobDescription: string;
    resume: FileList;
    tone: string;
};

const TailorForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            jobDescription: "",
            tone: "professional",
        },
    });

    const [resumeText, setResumeText] = useState("");
    const [fileName, setFileName] = useState("");
    const [tailoredResume, setTailoredResume] = useState("");

    const [loading, setLoading] = useState(false);
    console.log(loading);

    const handlePdfUpload = async (fileList: FileList | null) => {
        if (!fileList || fileList.length === 0) return;

        const file = fileList[0];
        if (file.type !== "application/pdf") {
            alert("Please upload a PDF file.");
            return;
        }

        setFileName(file.name);
        const text = await extractTextFromPdf(file);
        setResumeText(text);
    };

    const onSubmit = async (data: FormData) => {
        if (!resumeText) {
            alert("Please upload a valid PDF resume first.");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch("/api/tailor-resume", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    jobDescription: data.jobDescription,
                    resumeText,
                    tone: data.tone,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setTailoredResume(result.tailoredResume);
            } else {
                alert(result.error || "Something went wrong!");
            }
        } catch (error) {
            alert("Failed to connect to server.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Tailor Your Resume
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 bg-white dark:bg-[#111111] p-8 rounded-2xl shadow-xl"
                >
                    {/* Job Description */}
                    <div>
                        <label className="block font-medium mb-2">
                            Job Description
                        </label>
                        <textarea
                            id="jobDescription"
                            {...register("jobDescription", {
                                required: "Job description is required.",
                            })}
                            className={`w-full p-4 border rounded-xl text-foreground min-h-[150px] resize-none ${
                                errors.jobDescription
                                    ? "border-red-500"
                                    : "border-gray-300 dark:border-gray-700"
                            }`}
                            placeholder="Paste the job description here..."
                        />
                        {errors.jobDescription && (
                            <p className="text-red-500 mt-1 text-sm">
                                {errors.jobDescription.message}
                            </p>
                        )}
                    </div>

                    {/* Resume */}
                    <div>
                        <label className="block font-medium mb-2">
                            Upload Resume (PDF)
                        </label>
                        <input
                            id="resume"
                            type="file"
                            accept=".pdf"
                            {...register("resume", {
                                required: "Resume upload is required.",
                                validate: {
                                    isPdf: (files) =>
                                        (files &&
                                            files.length > 0 &&
                                            files[0].type ===
                                                "application/pdf") ||
                                        "Only PDF files are allowed.",
                                },
                                onChange: async (e) => {
                                    const files = e.target.files;
                                    await handlePdfUpload(files);
                                },
                            })}
                            className={`w-full file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-primary file:text-white file:cursor-pointer text-foreground ${
                                errors.resume
                                    ? "border-red-500"
                                    : "border-gray-300 dark:border-gray-700"
                            }`}
                        />

                        {fileName && (
                            <p className="text-sm text-muted-foreground mt-2">
                                Uploaded:{" "}
                                <span className="font-semibold">
                                    {fileName}
                                </span>
                            </p>
                        )}
                        {errors.resume && (
                            <p className="text-red-500 mt-1 text-sm">
                                {errors.resume.message as string}
                            </p>
                        )}
                    </div>

                    {/* Tone Preference */}
                    <div>
                        <label className="block font-medium mb-2">
                            Preferred Tone
                        </label>
                        <select
                            id="tone"
                            {...register("tone")}
                            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-[#111111] text-foreground"
                        >
                            <option value="professional">Professional</option>
                            <option value="friendly">Friendly</option>
                            <option value="confident">Confident</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl transition-colors font-semibold shadow-lg"
                        >
                            Tailor Now
                        </button>
                    </div>
                </form>
                {tailoredResume && (
                    <div className="mt-8 p-6 bg-gray-50 dark:bg-[#222] rounded-xl whitespace-pre-wrap text-gray-900 dark:text-gray-100">
                        <h3 className="text-xl font-semibold mb-4">
                            Your Tailored Resume
                        </h3>
                        <pre>{tailoredResume}</pre>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TailorForm;
