import { useState } from "react"

interface ToggleInterface {
    question: string
    answer: string
}
const Toggle = ({ question, answer }: ToggleInterface) => {
    const [openToggle, setOpenToggle] = useState(false)
    return (
        <div
            className="border-t border-[#BDBDBD] py-4"
            onClick={() => setOpenToggle(!openToggle)}
        >
            <p
                className={`font-semibold text-2lg ${openToggle ? "font-semibold" : "font-normal"}`}
            >
                {question}
            </p>
            {openToggle && <p className="mt-2 text-lg">{answer}</p>}
        </div>
    )
}

export default Toggle
