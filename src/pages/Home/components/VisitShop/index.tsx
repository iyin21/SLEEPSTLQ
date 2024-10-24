import { Button } from "@components/index"

const VisitShop = () => {
    return (
        <div className="mt-20 md:mt-40 px-4 md:px-0">
            <h2 className="text-primary-100 text-center font-bold text-[30px] md:text-xl">
                Visit Our Shop
            </h2>
            <p className="text-primary-90 mt-6 text-center md:w-[70%] mx-auto">
                Our Personal Diffuser is an aromatherapy device that contains a
                blend of melatonin, lavender, and chamomile. A few breaths of
                our plant-based essential oil mist will mellow you out, quiet
                the mind, and lull you to bed.
            </p>
            <div className="flex justify-center">
                <Button className="mt-6">Visit Shop</Button>
            </div>
        </div>
    )
}

export default VisitShop
