import { Navbar, Footer } from "@components/index"
import HeroSection from "./components/HeroSection"
import FAQSection from "./components/FAQSection"

const FAQs = () => {
    return (
        <div>
            <header className="bg-[#FBF9F2] pb-60">
                <Navbar />
                <HeroSection />
            </header>
            <FAQSection/>
            <Footer />
        </div>
    )
}

export default FAQs
