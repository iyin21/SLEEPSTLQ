import { Navbar, Footer, Testimonials } from "@components/index"
import HeroSection from "./components/HeroSection"
import AboutProduct from "./components/AboutProduct"

const Shop = () => {
    return (
        <div>
            <header className="h-screen bg-cover   bg-no-repeat bg-center bg-small-hero-background2  sm:bg-hero-background2">
                <Navbar />
                <HeroSection />
            </header>
            <AboutProduct />
            <div className="pb-20">
                <Testimonials />
            </div>

            <Footer />
        </div>
    )
}

export default Shop
