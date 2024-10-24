import { IoMdArrowDropright } from "react-icons/io"
import { Carousel } from "@mantine/carousel"
import Avatar from "@assets/icons/avatar.svg"
import { useMediaQuery } from "@mantine/hooks"

const OurAmazingStory = () => {
    const matches = useMediaQuery("(min-width: 900px)")
    return (
        <div className="md:flex px-4 sm:px-10 md:px-20 lg:px-36 mt-32 gap-20 w-full">
            <div className="text-primary-100 md:w-[50%]">
                <p className="text-md">Our Amazing Story</p>
                <h2 className="font-bold mt-6 text-[30px] md:text-xl">
                    10k+Happ<span className="bg-[#FFD7231A]">y Customers</span>
                </h2>
                <p className="mt-10 opacity-60 ">
                    There’s no secret sauce, no wizard behind the curtain. What
                    makes Aerolab tick is an interdisciplinary team with a
                    framework that fosters candid collaboration.
                </p>
                <div className="flex text-lg font-bold items-center mt-4 -ml-2">
                    <IoMdArrowDropright color="#12305B" size="22px" />
                    <p className="border-b-blue-100 underline font-bold">
                        {" "}
                        More know About us
                    </p>
                </div>
            </div>

            <div className="md:w-[50%] md:mt-0 mt-10 flex justify-center lg:pl-20">
                <Carousel
                    withIndicators
                    height={matches ?380: 340}
                    className={`bg-[#FBF9F2] p-6 pt-10 drop-shadow-2xl "" ${matches ?"w-[400px]":"w-[320px]"}` }
                    classNames={{
                        indicator:
                            "rounded-full w-[10px] h-[10px] bg-[#C4C4C4] ",
                    }}
                    loop
                    withControls={false}
                >
                    {new Array(2).fill(0).map((_, index) => (
                        <Carousel.Slide key={index}>
                            {/* <div className="bg-[#FBF9F2] p-4"> */}
                            <p className="text-green-100 italic text-2lg lg:text-3lg md:leading-[40px]">
                                I’m a very anxious person but use this and feel
                                so relaxed and sleep way better now with the aid
                                of sleepstiq.{" "}
                            </p>
                            <div className={`flex gap-4 ${matches ?"mt-20": "mt-12"} items-center`}>
                                <img src={Avatar} alt="" />
                                <div>
                                    <p className="text-green-100 font-bold">
                                        James Miller
                                    </p>
                                    <p className="text-[#152934]">
                                        CEO, Techbias
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default OurAmazingStory
