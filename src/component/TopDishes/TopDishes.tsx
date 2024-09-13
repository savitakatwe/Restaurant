import { DishCard } from "../index.ts";
import FoodImage2 from "../../assets/FoodImage2.png";
import FoodImage3 from "../../assets/FoodImage3.png";
import { ArrowRight } from "lucide-react";

const TopDishes = () => {
  return (
    <>
      <div>
        <div className={"flex justify-center mt-10 "}>
          <p className={"text-4xl font-semibold text-dark-black"}>
            Our Top <span className={"text-purple-primary"}>Dishes</span>
          </p>
        </div>
        <div
          className={
            "flex flex-col md:flex-row gap-6 justify-center items-center md:justify-between md:mx-14 mt-10"
          }
        >
          <DishCard
            dishImage={FoodImage3}
            tagText={"Healthy"}
            dishName={"Chicken Hell"}
            time={"24min"}
            rating={"4.9"}
            price={22}
          />
          <DishCard
            dishImage={FoodImage2}
            tagText={"Supreme"}
            dishName={"Fish Grill"}
            time={"14min"}
            rating={"3.9"}
            price={19}
          />
          <DishCard
            dishImage={FoodImage3}
            tagText={"Healthy"}
            dishName={"Sea food"}
            time={"33min"}
            rating={"4.5"}
            price={34}
          />
          <DishCard
            dishImage={FoodImage2}
            tagText={"Trending"}
            dishName={"Fish Fry"}
            time={"12min"}
            rating={"4.3"}
            price={23}
          />
          <DishCard
            dishImage={FoodImage3}
            tagText={"Healthy"}
            dishName={"Chicken Hell"}
            time={"24min"}
            rating={"4.9"}
            price={18}
          />
        </div>
        <div
          className={"flex flex-row justify-end mr-16  items-center mt-5 gap-2"}
        >
          <p className={"text-xl text-gray-primary"}>view all </p>
          <ArrowRight className={"text-gray-primary"} />
        </div>
      </div>
      <div className={"border border-solid md:mx-16 mx-6 my-8"}></div>
    </>
  );
};
export default TopDishes;
