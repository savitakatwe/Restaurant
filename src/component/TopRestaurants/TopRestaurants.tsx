import RestaurantCard from "../RestaurantCard/RestaurantCard.tsx";

const TopRestaurants = () => {
    return <>
        <div>
            <div className={"flex justify-center mt-10 "}>
                <p className={"text-4xl font-semibold text-dark-black"}>Our Top <span
                    className={"text-purple-primary"}>Restaurants</span>
                </p>
            </div>
            <div className={"m-6 flex flex-col justify-center md:flex-row gap-4"}>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>

    </>
}
export default TopRestaurants