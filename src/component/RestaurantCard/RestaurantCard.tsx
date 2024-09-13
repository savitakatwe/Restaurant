import ChickenImage from "../../assets/ChickenImage.png"
import StarIcon from "../../assets/StarIcon.svg"
import BookMark from "../../assets/BookMark.svg"

const RestaurantCard = () => {
    return <>
        <div className={"h-fit w-fit border border-solid rounded-3xl overflow-hidden"}>
            <img src={ChickenImage} alt="Chicken"/>
            <div className={"p-4"}>
                <div className={"bg-yellow-secondary border rounded-md border-none w-fit px-2"}>
                    <p className={'text-yellow-primary'}> Healthy </p></div>
                <p className={" text-2xl"}>The Chicken King</p>
                <div className={"flex flex-row justify-between  "}>
                    <div className={"flex gap-3 items-center"}>
                        <p className={" text-lg text-dark-tertiary"}>29min</p>
                        <img className={" h-4 w-4"} src={StarIcon} alt="Star"/>
                        <p className={" text-lg text-dark-tertiary"}>4.8</p>
                    </div>
                    <div
                        className={"border  rounded-3xl bg-gray-secondary   w-8 h-8 flex  justify-center items-center"}>
                        <img src={BookMark} alt="Bookmark" className={"w-4 h-4"}/>

                    </div>

                </div>
            </div>
        </div>
    </>
}
export default RestaurantCard;