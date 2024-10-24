import OurMissionImg from "@assets/images/ourMission.png"

const OurMission = () => {
    return (
        <div className="md:flex gap-20 mt-32 mx-10 md:mx-0 md:ml-20  lg:ml-36">
            <div className=" mt-10 lg:mt-20 md:w-[40%]">
                <h2 className="font-bold text-primary-100 text-[30px] md:text-xl">Our Mission</h2>
                <p className="mt-6 text-primary-90 text-lg">
                    We started Sleepstiq with 1 simple goal: to be your best
                    friend at bedtime. We, just like you, deal with stress,
                    unease, and trouble sleeping from a number of silly things
                    like school, work, screens, numbers, and people. That's why
                    we created products that aim to -{" "}
                </p>
                <p className="mt-6 text-primary-90 text-lg">✓ Promote Calm</p>{" "}
                <p className="text-primary-90 text-lg">✓ Support Sleep</p>
                <p className="text-primary-90 text-lg"> ✓ Reduce Stress</p>
                <p className="text-primary-90 text-lg"> ✓ Aid Relaxation</p>
            </div>
            <img src={OurMissionImg} className="mt-20 md:mt-0 md:w-[60%]" alt="" />
        </div>
    )
}

export default OurMission
