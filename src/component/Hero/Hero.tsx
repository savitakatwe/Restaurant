import HeroFoodImage from "../../assets/HeroFoodImage.png"
import GreenStar from "../../assets/Vector.svg"
import StarIcon from "../../assets/StarIcon.svg"

const Hero = () => {
    return <>
        <div className="flex flex-col md:flex-row justify-center md:justify-between h-fit  items-center mt-28">
            <div className="w-3/4 md:w-1/2 m-5 md:m-12 justify-center">
                <div className="flex justify-center  md:justify-start items-center gap-4">
                    <div className="border w-10"></div>
                    <p className="text-sm text-gray-400">OVER 1000 USERS</p>
                </div>
                <div className={"my-5  "}>
                    {/*mobile view text*/}
                    <p className="text-4xl sm:hidden text-center text-dark-primary font-semibold">
                        Enjoy Food
                    </p>
                    <p className="text-4xl sm:hidden text-center text-dark-primary font-semibold">
                        Over <span className="sm:hidden text-purple-primary">World</span>
                    </p>
                    {/*large device view*/}
                    <p className="hidden sm:block text-7xl text-left text-dark-primary font-semibold">
                        Enjoy Food All
                    </p>
                    <p className="hidden sm:block text-7xl text-left text-dark-primary font-semibold">
                        Over The <span className="text-purple-primary">World</span>
                    </p>

                </div>
                <p className="text-dark-tertiary text-center md:text-left text-lg my-5">
                    EatLy helps you set saving goals, earn cash back offers, go<br/> to the disclaimer for more details,
                    and
                    get paychecks up to two<br/> days early. Get a $20 bonus.
                </p>
                <div className={'flex gap-4 justify-center md:justify-start'}>
                    <button
                        className="p-3  bg-purple-primary border-solid border rounded-2xl text-white text-base	">Get
                        Started
                    </button>
                    <button
                        className="p-3  bg-white border-solid border border-purple-primary rounded-2xl text-purple-primary text-base	">Go
                        Pro
                    </button>
                </div>
                <div className="flex flex-row justify-center md:justify-start items-center gap-4 my-8">
                    <img src={GreenStar} alt={'GreenStar'}/>

                    <p className="text-sm md:text-base">TrustPilot</p>

                    <div className="flex gap-1">
                        <img src={StarIcon} alt={'StarIcon'}/>
                        <img src={StarIcon} alt={'StarIcon'}/>
                        <img src={StarIcon} alt={'StarIcon'}/>
                        <img src={StarIcon} alt={'StarIcon'}/>
                        <img src={StarIcon} alt={'StarIcon'}/>
                    </div>
                    <p className="text-sm md:text-base text-dark-secondary">4900+</p>
                </div>


            </div>
            <div className={"flex justify-center items-center    w-3/4"}>
                <img src={HeroFoodImage} alt={'HeroFoodImage'}/>
            </div>
        </div>
    </>
}
export default Hero;