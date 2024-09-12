import HeroFoodImage from "../../assets/HeroFoodImage.png"

const Hero = () => {
    return <>
        <div className="flex justify-between items-center">
            <div className="w-1/2 m-12">
                <div className="flex items-center gap-4">
                    <div className="border w-10"></div>
                    <p className="text-sm text-gray-400">OVER 1000 USERS</p>
                </div>
                <div className={"my-5"}><p className="text-7xl text-dark-primary font-semibold">Enjoy Foods All</p>
                    <p className="text-7xl text-dark-primary font-semibold">Over The<span
                        className="text-purple-primary"> World</span>
                    </p>
                </div>
                <p className="text-dark-tertiary text-lg my-5">EatLy help you set saving goals, earn cash back offers,
                    Go
                    to disclaimer for more details and get paychecks up to two
                    days early. Get a $20 bonus.</p>
                <div className={'flex gap-4'}>
                    <button
                        className="p-3 font-semibold bg-purple-primary border-solid border rounded-2xl text-white text-base	">Get
                        Started
                    </button>
                    <button
                        className="p-3 font-semibold bg-white border-solid border border-purple-primary rounded-2xl text-purple-primary text-base	">Go
                        Pro
                    </button>
                </div>
            </div>
            <div className={"m-12"}>
                <img src={HeroFoodImage} alt={'HeroFoodImage'}/>
            </div>
        </div>
    </>
}
export default Hero;