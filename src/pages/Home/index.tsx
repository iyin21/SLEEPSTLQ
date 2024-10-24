import { Navbar, Footer, Testimonials } from "@components/index"
import HeroSection from "./components/HeroSection"
import Partners from "./components/Partners"
import OurAmazingStory from "./components/OurAmazingStory"
import ShopNow from "./components/ShopNow"
import OurMission from "./components/OurMission"
import VisitShop from "./components/VisitShop"
import ProductPreviews from "./components/ProductReviews"

const Home = () => {
    return (
        <div className="w-full">
            <header className=" bg-cover bg-center h-screen bg-hero-background">
                <Navbar />
                <HeroSection />
            </header>
            <Partners />
            <OurAmazingStory />
            <Testimonials />
            <ShopNow />
            <OurMission />
            <VisitShop />
            <ProductPreviews />
            <Footer />
        </div>
    )
}

export default Home


