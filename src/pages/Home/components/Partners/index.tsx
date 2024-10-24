import Google from "@assets/icons/google.svg"
import Forbes from "@assets/icons/forbes.svg"
import SleepReview from "@assets/icons/sleepReview.svg"
import Influencive from "@assets/icons/influencive.svg"
import Bloomberg from "@assets/icons/bloomberg.svg"
import { useMediaQuery } from "@mantine/hooks"

const Partners = () => {
    const matches = useMediaQuery("(min-width: 1110px)")
    return (
        <div className="grid justify-items-end ">
            <div
                className={`gap-6 px-4 lg:px-0 w-full flex  justify-around bg-white-100 ${matches && " w-[88%] justify-around"} lg:w-[90%] flex-wrap  items-center  py-8  -mt-14 shadow-[50px_50px_100px_0px_rgba(0,0,0,0.15)]`}
            >
                {/* `grid grid-cols-3 gap-6 px-4 lg:px-0 w-full lg:flex  lg:justify-around bg-white-100 ${matches &&" w-[88%]"} w-[90%] lg:w-[90%] items-center  py-8  -mt-14 drop-shadow-2xl` */}
                <img src={Google} alt="google" />
                <img src={Forbes} alt="Forbes" />
                <img src={Bloomberg} alt="Bloomberg" />
                <img src={SleepReview} alt="SleepReview" />
                <img src={Influencive} alt="Influencive" />
            </div>
        </div>
    )
}

export default Partners
