import Logo from "@assets/icons/whiteLogo.svg"
import Facebook from "@assets/icons/facebook.svg"
import Twitter from "@assets/icons/twitter.svg"
import Googleplus from "@assets/icons/googleplus.svg"
import Linkedin from "@assets/icons/linkedin.svg"
import { useMediaQuery } from "@mantine/hooks"

const links = [
    {
        name: "About",
        href: "",
    },
    { name: "Blog", href: "" },
    { name: "Contact", href: "" },
    { name: "Jobs", href: "/faqs" },
]

const Footer = () => {
    const matches = useMediaQuery("(min-width: 1150px)")
    return (
        <footer className="bg-primary-100 text-white-100 p-6 pl-10 w-full">
            <div className="flex justify-center ">
                <img src={Logo} alt="Logo" />
            </div>
            {/* grid grid-cols-6 */}
            {/* flex  justify-between w-full */}
            <div className=" w-full grid grid-cols-2 lg:grid-cols-6 gap-y-10  mt-10 text-lg">
                <div>
                    <p className="font-semibold">Company</p>
                    <ul className="mt-6">
                        {links.map((item) => (
                            <li className="text-[#ABABAB] mb-4">
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* -ml-8 */}
                <div
                    className={` ${matches ? "-ml-20 w-[125%]" : "lg:-ml-12"}  `}
                >
                    <p className="font-semibold mb-6">CONTACT</p>
                    <p className="text-[#ABABAB] mb-4">Phone</p>
                    <p className="font-bold mb-4">+234 708 507 3128</p>
                    <p className="text-[#ABABAB] mb-4">Address</p>
                    <p className="font-bold">
                        16, Ogindipe Close, Upston Close
                    </p>
                </div>
                {/* col-span-2 */}
                <div className="col-span-2  md:col-span-1 lg:col-span-2  ">
                    <p className="font-semibold mb-6 text-lg leading-[38px]">
                        CONSUMER ADVISORY
                    </p>
                    <p>
                        These statements have not been evaluated by the Food and
                        Drug Administration. This product is not intended to
                        diagnose, treat, cure, or prevent any disease. This
                        product should be used only as directed on the label.
                        All trademarks and copyrights are property of their
                        respective owners and not affiliated with nor do they
                        endorse this product. Results may vary.
                        <p className="mt-4">
                            By using our website or product, you agree to follow
                            our{" "}
                            <span className="text-[#8FE2FF]">
                                terms of service.
                            </span>
                        </p>
                    </p>
                </div>
                {/* col-span-2 */}
                <div className="w-full col-span-2  md:col-span-1 lg:col-span-2 sm:pl-4 md:pl-6 ">
                    <div className="border-l border-[#5D6544] pl-4 md:pl-10 lg:pr-16">
                        <p className="mb-6">GET IN TOUCH</p>
                        <p className="text-[#ABABAB] mt-2">
                            Feel free to get in touch with us vai email
                        </p>
                        <p className="my-6 text-2lg lg:text-3lg">
                            hello@sleepstiq.com
                        </p>
                        <div className="flex gap-4">
                            <img src={Facebook} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Googleplus} alt="" />
                            <img src={Linkedin} alt="" />
                        </div>
                    </div>
                    <p className="text-[#ABABAB] mt-12 sm:pl-10 text-md">
                        © 2020@sleepstiq. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
