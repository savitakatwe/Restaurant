import MobileRestaurantPic from "../../assets/MobileRestaurant.png"
import CurlPointer from "../../assets/CurlPointer.png"
import {ArrowRight} from "lucide-react";

const Home = () => {
    return <>
        <div className={"flex flex-col md:flex-row"}>
            <div>
                <img src={MobileRestaurantPic} alt={"MobileRestaurantPic"}/>
            </div>
            <div className={"w-3/4 md:w-1/2 m-5 md:m-12 justify-center"}>
                <p className={"text-4xl md:text-7xl font-semibold"}>Premium <span
                    className={"text-purple-primary"}>Quality </span><br/>For Your Health</p>
                <ul className={"list-disc"}>
                    <li className={"text-dark-tertiary"}>Premium quality food is made with ingredients that <br/> are
                        packed with essential
                        vitamins,
                        minerals.
                    </li>
                    <li className={"text-dark-tertiary"}>These foods promote overall wellness by support<br/> healthy
                        digestion and boosting immunity
                    </li>
                </ul>
                <button
                    className="p-5 bg-purple-primary font-medium flex gap-2 flex-row border-solid border rounded-2xl text-white text-base">Download <ArrowRight/>
                </button>
                <img src={CurlPointer} alt={CurlPointer}/>
            </div>

        </div>
    </>
}
export default Home;