import Logo from "@assets/icons/logo.svg"
import { NavLink } from "react-router-dom"
import { HiMenuAlt2 } from "react-icons/hi"
import { Drawer } from "@mantine/core"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"

const navLinks = [
    { name: "Home", href: "/home" },
    {
        name: "About",
        href: "/#",
    },
    { name: "Shop", href: "/shop" },
    { name: "FAQs", href: "/faqs" },
]
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <nav className="flex justify-between sm:justify-normal p-4 items-center text-primary-100  ml-4 sm:ml-10 md:ml-20 lg:ml-36 md:gap-40 sm:gap-20 gap-10">
            <img src={Logo} alt="Logo" />
            <ul className=" hidden sm:flex  gap-14 text-md sm:text-2lg">
                {navLinks.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                                isActive ? "font-bold" : ""
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden block cursor-pointer">
                
                <HiMenuAlt2
                    size={28}
                    onClick={() => setOpenNav(true)}
                    color="#667085"
                />
            </div>
            <Drawer
                opened={openNav}
                onClose={() => setOpenNav(false)}
                //size="75%"
                withCloseButton={false}
                styles={{
                    content: {
                        background: "white",
                    },
                }}
            >
                <div>
                    <div className="flex justify-between items-center cursor-pointer">
                        <img src={Logo} alt="" className="w-20" />
                        <IoCloseOutline
                            onClick={() => setOpenNav(false)}
                            size="1.5em"
                            color="black"
                        />
                    </div>

                    <ul className=" flex justify-center flex-col mt-6 text-center  gap-y-6 text-2lg">
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) =>
                                        isActive ? "font-bold" : ""
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </Drawer>
        </nav>
    )
}
export default Navbar
