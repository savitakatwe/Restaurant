const HeroDivider = () => {
    return <>
        <div
            className="bg-purple-primary flex flex-col md:flex-row justify-between  items-center px-20 py-10 gap-8 md:px-36 md:py-10">
            <div className="flex flex-col justify-center items-center gap-4">
                <p className={"text-5xl text-white font-bold"}>10K+</p>
                <p className={"flex text-sm text-center text-purple-secondary items-center justify-center"}>Satisfied
                    Costumers <br/>
                    All Great Over The World </p>
            </div>
            <div className={"  border md:h-28 border-gray-primary "}/>
            <div className={"md:hidden border w-44 border-gray-primary "}/>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className={"text-5xl text-white font-bold"}>4M</p>
                <p className={"text-sm text-center text-purple-secondary"}>Healthy Dishes Sold <br/>Including Milk
                    Shakes Smooth
                </p>
            </div>
            <div className={"  border md:h-28 border-gray-primary "}/>
            <div className={"md:hidden border w-44 border-gray-primary "}/>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className={"text-5xl text-white font-bold"}>99.99%</p>
                <p className={"text-sm text-center  text-purple-secondary"}>Reliable Customer Support <br/> We Provide
                    Great
                    Experiences </p>
            </div>
        </div>
    </>
}
export default HeroDivider;