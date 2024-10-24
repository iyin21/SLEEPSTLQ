import { Button } from "@components/index"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <div className="text-primary-100 ml-8 sm:ml-14 md:ml-20 lg:ml-36 mt-20">
            <p className="text-2lg">We're here to help you</p>
            <h1 className="font-bold md:text-2xl text-[40px]">Relax & Rest</h1>
            <p className=" w-[70%] md:w-[60%] lg:w-[45%] text-lg">
                With the aid of our Melatonin Sleepstiq, we can assure you that
                you can get quality sleep.
            </p>
            <Button className="mt-8" onClick={() => navigate("/shop")}>
                Visit Shop
            </Button>
        </div>
    )
}
export default HeroSection
