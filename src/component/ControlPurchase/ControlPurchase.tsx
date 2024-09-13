import Savings from "../../assets/savings.png";
import DishControlCard from "../DishControlCard";

const ControlPurchase = () => {
  return (
    <div className={"flex md:flex-row md:m-16"}>
      <div className={"w-1/2"}>
        <p className={"text-5xl font-bold"}>
          Control <span className={"text-purple-primary"}>Purchases</span>
          <br /> Via Dashboard
        </p>
        <DishControlCard />
      </div>
      <div className={"w-1/2"}>
        <img src={Savings} alt={"Savings"} />
      </div>
    </div>
  );
};
export default ControlPurchase;
