import { Button } from "@components/index"
import ShopNowImage from "@assets/images/ShopNowImage.png"
import { useMediaQuery } from "@mantine/hooks"
import { useNavigate } from "react-router-dom"

const ShopNow = () => {
    const matches = useMediaQuery("(min-width: 950px)")
    const navigate = useNavigate()
    return (
        <div className="mt-32 ">
            <hr className="bg-[#21384218] text-[#21384218] mx-10 md:mx-20 lg:mx-36" />
            <div
                className={`${matches ? "" : "flex-col-reverse"} flex  w-[100%] lg:mt-20 gap-2`}
            >
                <div className="relative   sm:pr-10  pr-6 mt-4">
                    <img
                        src={ShopNowImage}
                        alt="Shop now image"
                        width={"100%"}
                    />
                    <div className="bg-white-100 p-6 rounded-lg shadow-[50px_50px_100px_0px_rgba(0,0,0,0.15)] flex justify-center flex-col sm:absolute right-0   bottom-0">
                        <p>😊 Promotes calm and relaxation.</p>
                        <p>💤 Inhalation allows for a rapid effect.</p>
                        <p>✅ 100% drug-free, plant-based ingredients.</p>‍
                        <p>⚕️ 3rd-party lab tested.</p>
                    </div>
                </div>

                <div
                    className={`mt-10 md:mt-20 lg:mt-28 px-4 sm:px-10 md:px-20  ${matches && "pr-16 mt-16 w-[50%]"} lg:pr-36`}
                >
                    <h2
                        className={`font-bold text-primary-100 text-[30px] md:text-xl ${matches ? "text-left" : "text-center"} `}
                    >
                        Shop Now
                    </h2>
                    <p
                        className={`mt-6 text-primary-90 text-lg  ${matches ? "text-left" : "text-center"} `}
                    >
                        Our Personal Diffuser is an aromatherapy device that
                        contains a blend of melatonin, lavender, and chamomile.
                        A few breaths of our plant-based essential oil mist will
                        mellow you out, quiet the mind, and lull you to bed.
                    </p>
                    <div
                        className={`${matches ? "justify-left" : "flex justify-center"}`}
                    >
                        <Button className="mt-6" onClick={()=> navigate("/shop")}>Visit Shop</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShopNow
