import ChickenImage from "../../assets/ChickenImage.png";
import BurgerImage from "../../assets/BurgerImage.png";
import { ArrowRight } from "lucide-react";
import { RestaurantCard } from "../index.ts";

const TopRestaurants = () => {
  return (
    <>
      <div>
        <div className={"flex justify-center mt-10 "}>
          <p className={"text-4xl font-semibold text-dark-black"}>
            Our Top <span className={"text-purple-primary"}>Restaurants</span>
          </p>
        </div>
        <div
          className={
            "mx-10 mt-10 mb-4 md:mx-16 md:mt-16 md:mb-8 flex flex-col justify-center md:justify-between md:flex-row gap-4"
          }
        >
          <RestaurantCard
            restaurantImage={ChickenImage}
            tagText={"Healthy"}
            time={"24min"}
            restaurantName={"The Chicken King"}
            rating={"4.8"}
          />
          <RestaurantCard
            restaurantImage={BurgerImage}
            tagText={"Trending"}
            time={"11min"}
            restaurantName={"The Burger King"}
            rating={"4.9"}
          />
          <RestaurantCard
            restaurantImage={ChickenImage}
            tagText={"Healthy"}
            time={"9min"}
            restaurantName={"The Noodles"}
            rating={"4.3"}
          />
        </div>

        <div
          className={
            "flex flex-row justify-end md:mr-16 mr-10 items-center  gap-2"
          }
        >
          <p className={"text-xl text-gray-primary"}>view all </p>
          <ArrowRight className={"text-gray-primary"} />
        </div>
      </div>
      <div className={"border border-solid md:mx-16 mx-6 my-8"}></div>
    </>
  );
};
export default TopRestaurants;
