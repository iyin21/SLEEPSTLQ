import { Carousel } from "@mantine/carousel"
import Product1 from "@assets/images/product1.png"
import Product2 from "@assets/images/product2.png"
import { IoIosStar } from "react-icons/io"
import { useMediaQuery } from "@mantine/hooks"

const productReviews = [
    {
        image: Product1,
        content:
            "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
        name: "Rachel Dill",
    },
    {
        image: Product2,
        content:
            "It really helps me fall right to sleep compared to melatonin pills.",
        name: "Javier Mendez",
    },
    {
        image: Product2,
        content:
            "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
        name: "Naomi Nwazurike",
    },
    {
        image: Product1,
        content:
            "I have been falling asleep faster and sleeping thru the night.",
        name: "Nate Jacobs",
    },
]
const ProductPreviews = () => {
    const matches = useMediaQuery("(min-width: 760px)")
    const matches1 = useMediaQuery("(min-width: 1024px)")
    const matches2 = useMediaQuery("(min-width: 460px)")
    return (
        <div className="pl-10 md:pl-20 lg:pl-36 mt-20 md:mb-40 mb-20">
            <hr className="bg-[#21384218] text-[#21384218] mx-10 md:mx-20 lg:mr-36" />
            <h2 className="text-green-100 mb-6 text-[30px] md:text-xl font-bold mt-10 md:mt-20">
                Product Reviews
            </h2>
            <div>
                <Carousel
                    withIndicators
                    height={matches2 ? 520 : 530}
                    withControls={false}
                    loop
                    slidesToScroll={
                        matches1 ? 4 : matches ? 3 : matches2 ? 2 : 1
                    }
                    slideSize={
                        matches1
                            ? "25%"
                            : matches
                              ? "33.33%"
                              : matches2
                                ? "50%"
                                : "100%"
                    }
                    align="start"
                >
                    {productReviews.map((item, index) => (
                        <Carousel.Slide
                            key={index}
                            className="bg-white-100  mr-10 rounded-lg relative  shadow-[50px_50px_100px_0px_rgba(0,0,0,0.15)] mt-4 mb-20"
                        >
                            <img src={item.image} alt="" />
                            <div className="p-6">
                                <p className="italic text-green-100">
                                    {item.content}
                                </p>
                                <div className="mb-2 absolute bottom-2">
                                    <p className="mt-4 font-bold">
                                        {item.name}
                                    </p>
                                    <div className="flex gap-4 mt-4">
                                        <IoIosStar color="#27AE60" />
                                        <IoIosStar color="#27AE60" />
                                        <IoIosStar color="#27AE60" />
                                        <IoIosStar color="#27AE60" />
                                        <IoIosStar color="#27AE60" />
                                    </div>
                                </div>
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default ProductPreviews
