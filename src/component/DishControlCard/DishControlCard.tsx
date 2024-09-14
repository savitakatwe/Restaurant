import { PropsWithChildren } from "react";

interface DishControlCardProps {
  foodImage: string;
  foodName: string;
  status: string;
  time: string;
}

const DishControlCard = ({
  foodImage,
  foodName,
  status,
  time,
}: PropsWithChildren<DishControlCardProps>) => {
  return (
    <>
      <div
        className={
          "flex flex-row  gap-4 border-none  shadow-xl rounded-2xl w-fit md:px-8 md:py-4 px-4 py-2 "
        }
      >
        <img src={foodImage} alt={"FoodImage2"} className={"h-14 w-14"} />
        <div className={"flex flex-col"}>
          <p className={"text-lg font-semibold "}>{foodName}</p>
          <p className={"text-sm text-dark-tertiary"}>{status}</p>
        </div>
        <p className={"text-sm text-gray-primary flex items-end "}>{time}</p>
      </div>
    </>
  );
};
export default DishControlCard;
