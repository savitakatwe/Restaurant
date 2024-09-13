import FoodImage2 from "../../assets/FoodImage2.png";

const DishControlCard = () => {
  return (
    <>
      <div className={"flex flex-row "}>
        <img src={FoodImage2} alt={"FoodImage2"} className={"h-14 w-14"} />
        <div>
          <p className={"text-lg font-semibold"}>Chicken Hell</p>
          <p className={"text-sm text-dark-tertiary"}>On The Way</p>
        </div>
        <p className={"text-sm text-gray-primary"}>3:06pm</p>
      </div>
    </>
  );
};
export default DishControlCard;
