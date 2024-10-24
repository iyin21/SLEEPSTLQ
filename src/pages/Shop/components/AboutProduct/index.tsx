import { Button } from "@components/index"
import AboutProductImage from "@assets/images/aboutProduct.png"
const AboutProduct = () => {
    
    return (
        <div className="text-primary-100 px-4 sm:px-6 md:px-10 lg:px-40 gap-10 justify-center lg:gap-20 flex md:flex-row flex-col-reverse pt-20 w-full">
            {/* <div className="w-[50%] h-auto"> */}
            <img src={AboutProductImage} alt="" className="sm:w-[50%] h-auto" />
            {/* className="w-[50%] h-auto" */}

            <div className="md:mt-20 md:pl-10 md:w-[50%]">
                <h2 className="font-bold ">
                    About Product
                </h2>
                <p className="mt-6 text-primary-90">
                    Our Personal Diffuser is an aromatherapy device that
                    contains a blend of melatonin, lavender, and chamomile. A
                    few breaths of our plant-based essential oil mist will
                    mellow you out, quiet the mind, and lull you to bed.
                </p>
                <p className="mt-4 italic text-green-100">
                    😊 Promotes calm and relaxation.
                    <br />
                    💤 Inhalation allows for a rapid effect.
                    <br />
                    ✅ 100% drug-free, plant-based ingredients.
                    <br />
                    ‍⚕️ 3rd-party lab tested.
                </p>
                <div className="flex mt-6 gap-8 text-lg items-center text-black-100">
                    <div>
                        <p>Price</p>
                        <p className="font-semibold mt-2">USD 50</p>
                    </div>
                    <div>
                        <p>Unit</p>
                        <div className="w-[58px] border-primary-100 border-2 rounded-[5px] p-2">
                            <input
                                type="number"
                                className="w-full outline-none bg-transparent"
                                defaultValue={2}
                            />
                        </div>
                    </div>
                </div>
                
                    <Button className="mt-8">Buy</Button>
                
            </div>
        </div>
    )
}
export default AboutProduct
