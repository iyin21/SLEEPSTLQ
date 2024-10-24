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
            {/* bg-hero-background */}
            <header
                className=" bg-cove bg-cente h-screen"
                style={{
                    background: "url('/src/assets/images/Slider.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <Navbar />
                <HeroSection />
            </header>
            <Partners />
            <OurAmazingStory />
            <Testimonials/>
            <ShopNow />
            <OurMission />
            <VisitShop />
            <ProductPreviews />
            <Footer />
        </div>
    )
}

export default Home

// box-shadow: 50px 50px 100px 0px #00000025;
