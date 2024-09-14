import { Heart } from "lucide-react";
import StarIcon from "../../assets/StarIcon.svg";
import AddButtonIcon from "../../assets/AddButtonIcon.svg";
import { PropsWithChildren } from "react";

interface DishCardProps {
  dishImage: string;
  tagText: string;
  dishName: string;
  time: string;
  rating: string;
  price: number;
}

const DishCard = ({
  dishImage,
  tagText,
  dishName,
  time,
  rating,
  price,
}: PropsWithChildren<DishCardProps>) => {
  return (
    <>
      <div
        className={
          "h-fit w-fit border-none  shadow-2xl rounded-3xl overflow-hidden p-4"
        }
      >
        <div className={"flex flex-row"}>
          <img src={dishImage} alt={"FoodImage1"} className={""} />
          <Heart />
        </div>
        <div className={"p-4 flex flex-col gap-1 "}>
          <div
            className={
              "bg-yellow-secondary border rounded-md border-none w-fit px-2"
            }
          >
            <p className={"text-yellow-primary"}> {tagText} </p>
          </div>
          <p className={" text-2xl font-semibold text-dark-black"}>
            {dishName}
          </p>
          <div className={"flex flex-row justify-between  "}>
            <div className={"flex gap-3 items-center"}>
              <p className={" text-lg text-dark-tertiary"}>{time}</p>
              <img className={" h-4 w-4"} src={StarIcon} alt="Star" />
              <p className={" text-lg text-dark-tertiary"}>{rating}</p>
            </div>
          </div>
          <div className={"flex flex-row justify-between mt-2 "}>
            <p className={" text-2xl font-semibold text-dark-black"}>
              ${price}
              <span className={"text-lg text-gray-primary"}>.99</span>
            </p>

            <img src={AddButtonIcon} alt={AddButtonIcon} />
          </div>
        </div>
      </div>
    </>
  );
};
export default DishCard;
