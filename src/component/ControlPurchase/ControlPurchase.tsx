import Savings from "../../assets/savings.png";
import DishControlCard from "../DishControlCard";
import FoodImage2 from "../../assets/FoodImage2.png";
import FoodImage3 from "../../assets/FoodImage3.png";

const ControlPurchase = () => {
  return (
    <>
      <div className={"flex md:flex-row flex-col mx-8 my-8 md:mx-16 md:my-32 "}>
        <div className={"md:w-1/2"}>
          <p className={"text-2xl md:text-5xl font-bold"}>
            Control <span className={"text-purple-primary"}>Purchases</span>
            <br /> Via Dashboard
          </p>
          <div className={"flex flex-col gap-4 md:mt-8 my-4"}>
            <DishControlCard
              foodImage={FoodImage2}
              foodName={"Chicken Hell"}
              status={"On The Way"}
              time={"3:04pm"}
            />
            <DishControlCard
              foodImage={FoodImage3}
              foodName={"Chicken Hell"}
              status={"Delivered "}
              time={"2:09pm"}
            />
            <DishControlCard
              foodImage={FoodImage2}
              foodName={"Chicken Hell"}
              status={"Cancelled"}
              time={"1:15pm"}
            />
          </div>
        </div>
        <div className={"md:w-1/2 mt-4"}>
          <img src={Savings} alt={"Savings"} />
        </div>
      </div>
      <div className={"border border-solid md:mx-16 mx-6 my-8"}></div>
    </>
  );
};
export default ControlPurchase;
