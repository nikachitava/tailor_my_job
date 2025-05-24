import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Testimonials from "@/sections/Testimonials";
import WhyTailorMyJob from "@/sections/WhyTailorMyJob";

export default function Home() {
    return (
        <main>
            <Hero />

            <HowItWorks />

            <WhyTailorMyJob />

            <Testimonials />

            <GetStarted />
        </main>
    );
}
