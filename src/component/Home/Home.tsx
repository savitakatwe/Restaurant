import MobileRestaurantPic from "../../assets/MobileRestaurant.png"
import CurlPointer from "../../assets/CurlPointer.png"
import {ArrowRight} from "lucide-react";

const Home = () => {
    return <>
        <div className={"flex flex-col md:flex-row justify-between items-center md:m-12 "}>
            <div className={"flex flex-1 order-2 md:order-1 md:w-1/2 items-center justify-center w-3/4 h-3/4"}>
                <img src={MobileRestaurantPic} alt={"MobileRestaurantPic"}/>
            </div>
            <div className={"md:w-1/2 m-5 md:m-12 flex-1 order-1 md:order-2"}>
                <p className={"text-4xl md:text-7xl font-semibold pb-8 md:pb-10"}>Premium <span
                    className={"text-purple-primary"}>Quality </span><br/>For Your Health</p>
                <ul className={"flex flex-col list-disc justify-center  md:justify-start gap-5"}>
                    <li className={"text-dark-tertiary text-xs md:text-xl"}>Premium quality food is made
                        with ingredients that <br/> are
                        packed with essential vitamins, minerals.
                    </li>
                    <li className={"text-dark-tertiary text-xs md:text-xl"}>These foods promote overall wellness by
                        support<br/> healthy
                        digestion and boosting immunity
                    </li>
                </ul>
                <div className={"flex md:justify-start justify-center items-center"}>
                    <button
                        className="p-5 mt-5 md:mt-10 bg-purple-primary font-medium flex gap-2 flex-row border-solid border rounded-2xl text-white justify-center items-center">Download <ArrowRight/>
                    </button>
                </div>

                <img className={"md:ml-32 md:rotate-0 rotate-90 mt-16 md:mt-0 mb-10 md:mb-0"} src={CurlPointer}
                     alt={CurlPointer}/>

            </div>

        </div>
        <div className={'border border-solid mx-16 '}></div>
    </>
}
export default Home;