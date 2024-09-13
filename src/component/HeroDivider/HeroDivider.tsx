const HeroDivider = () => {
    return <>
        <div
            className="bg-purple-primary flex flex-col md:flex-row justify-between  items-center px-20 py-10 gap-8 md:px-36 md:py-10">
            <div className="flex flex-col justify-center items-center gap-4">
                <p className={"text-5xl text-white font-bold"}>10K+</p>
                <p className={"flex text-sm text-purple-secondary items-center justify-center"}>Satisfied Costumers
                    All Great Over The World </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <p className={"text-5xl text-white font-bold"}>4M</p>
                <p className={"text-sm text-purple-secondary"}>Healthy Dishes Sold Including Milk Shakes Smooth </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className={"text-5xl text-white font-bold"}>99.99%</p>
                <p className={"text-sm text-purple-secondary"}>Reliable Customer Support We Provide Great
                    Experiences </p>
            </div>

        </div>
    </>
}
export default HeroDivider;