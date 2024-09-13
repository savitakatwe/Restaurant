import { DishCard } from "../index.ts";

const TopDishes = () => {
  return (
    <>
      <div>
        <div className={"flex justify-center mt-10 "}>
          <p className={"text-4xl font-semibold text-dark-black"}>
            Our Top <span className={"text-purple-primary"}>Dishes</span>
          </p>
        </div>
        <DishCard />
      </div>
    </>
  );
};
export default TopDishes;
