import { Carousel } from "@mantine/carousel"
import { IoIosStar } from "react-icons/io"
import { useMediaQuery } from "@mantine/hooks"

const tesimonialData = [
    {
        content:
            "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
        name: "John Matthews",
    },
    {
        content:
            "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
        name: "Eunice Oliver",
    },
    {
        content:
            "It’s a really good product and helps me sleep better at night!",
        name: "Laura Davies",
    },
    {
        content:
            "Helps me relax and remember to breathe. Stress level definitely goes down",
        name: "Jane Bocks",
    },
]
const Testimonials = () => {
    const matches = useMediaQuery("(min-width: 1100px)")
    const matches1 = useMediaQuery("(min-width: 810px)")
    const matches2 = useMediaQuery("(min-width: 500px)")
    return (
        <div className="mt-32 w-full lg:pl-40 pl-4  sm:pl-10 md:pl-20">
            <Carousel
                withIndicators
                height={matches ?220: matches2? 250: 200}
                withControls={false}
                slideGap="lg"
                slidesToScroll={matches1 ?4 :matches2? 2: 1}
                slideSize={matches1 ?"25%" :matches2? "50%": "100%"}
                loop
                align="start"
            >
                {tesimonialData.map((item, index) => (
                    <Carousel.Slide
                        key={index}
                        className="bg-[#FBF9F2] p-6 mr-4 rounded-lg relative "
                    >
                        <p className="italic text-green-100 text-lg">{item.content}</p>
                        <div className="mb-2 absolute bottom-2">
                            <p className=" font-bold">{item.name}</p>
                            <div className="flex gap-4 mt-4">
                                <IoIosStar color="#27AE60" />
                                <IoIosStar color="#27AE60" />
                                <IoIosStar color="#27AE60" />
                                <IoIosStar color="#27AE60" />
                                <IoIosStar color="#27AE60" />
                            </div>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    )
}

export default Testimonials
