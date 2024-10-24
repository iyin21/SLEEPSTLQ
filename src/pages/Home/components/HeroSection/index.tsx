import { Button } from "@components/index"

const HeroSection = () => {
    return (
        <div className="text-primary-100 ml-8 sm:ml-14 md:ml-20 lg:ml-36 mt-20">
            <p className="text-md md:text-2lg">We're here to help you</p>
            <h1 className="font-bold md:text-2xl text-xl">Relax & Rest</h1>
            <p className=" w-[70%] md:w-[60%] lg:w-[45%] md:text-lg text-2sm">
                With the aid of our Melatonin Sleepstiq, we can assure you that
                you can get quality sleep.
            </p>
            <Button className="mt-8">Visit Shop</Button>
        </div>
    )
}
export default HeroSection
