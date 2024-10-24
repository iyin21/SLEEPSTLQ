import { IoIosSearch } from "react-icons/io"

const HeroSection = () => {
    return (
        <div className="text-primary-100 ml-8 sm:ml-14 md:ml-20 lg:ml-36 mt-20">
            <p className="text-md md:text-2lg">We're here to help you</p>
            <h1 className="font-bold md:text-2xl text-[40px]">
                How can we assist?
            </h1>
            <div className="flex items-center bg-white-100 rounded-[10px] p-4 mt-4 w-[70%]">
                <IoIosSearch color="#2C3E50" size="22px" />
                <input type="text" className="outline-none ml-2" placeholder="Search FAQs here" />
            </div>
        </div>
    )
}
export default HeroSection
