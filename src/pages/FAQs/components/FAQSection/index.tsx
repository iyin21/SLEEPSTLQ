import Toggle from "./toggle"
import { faqs } from "@utils/helpers"

const FAQSection = () => {
    return (
        <div className="sm:flex sm:gap-14 gap-6 py-10 mb-20 pl-6 lg:pl-10  pr-4 sm:pr-20 lg:pr-40">
            <div className="text-primary-10 text-2lg flex flex-wrap flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start mb-6 ">
                <p className="font-bold flex sm:mb-6  ">
                   <span className="py-2">Sleepstiq</span>  <span className="bg-[#FFD7231A] py-2 pr-4 pl-2">Product</span>{" "}
                </p>
                <p className="sm:mb-6">Order</p>
                <p>Melantonin</p>
            </div>
            <div className="border-b border-[#BDBDBD] w-full">
                {faqs.map((item, index) => (
                    <Toggle
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    )
}

export default FAQSection
