import RestaurantCard from "../RestaurantCard/RestaurantCard.tsx";

const TopRestaurants = () => {
    return <>
        <div>
            <div className={"flex justify-center mt-10 "}>
                <p className={"text-4xl font-semibold"}>Our Top <span
                    className={"text-purple-primary"}>Restaurants</span>
                </p>
            </div>
            <div>
                <RestaurantCard/>
            </div>
        </div>

    </>
}
export default TopRestaurants