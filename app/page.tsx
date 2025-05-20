import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Testimonials from "@/sections/Testimonials";
import TryItNow from "@/sections/TryItNow";
import WhyTailorMyJob from "@/sections/WhyTailorMyJob";

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <Hero />
            {/* How it works */}
            <HowItWorks />
            {/* Why TailorMyJob */}
            <WhyTailorMyJob />
            {/* Showcase Results / Examples */}
            <TryItNow />
            {/* Testimonials or Social Proof */}
            <Testimonials />
            {/* Call to Action / Get Started */}
            {/* Footer */}
        </main>
    );
}
