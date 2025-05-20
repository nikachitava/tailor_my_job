import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Testimonials from "@/sections/Testimonials";
import TryItNow from "@/sections/TryItNow";
import WhyTailorMyJob from "@/sections/WhyTailorMyJob";

export default function Home() {
    return (
        <main>
            <Hero />

            <HowItWorks />

            <WhyTailorMyJob />

            <TryItNow />

            <Testimonials />

            <GetStarted />
        </main>
    );
}
