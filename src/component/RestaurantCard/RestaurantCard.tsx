import StarIcon from "../../assets/StarIcon.svg";
import BookMark from "../../assets/BookMark.svg";
import { PropsWithChildren } from "react";

interface RestaurantCardProps {
  restaurantImage: string;
  tagText: string;
  restaurantName: string;
  time: string;
  rating: string;
}

const RestaurantCard = ({
  restaurantImage,
  tagText,
  restaurantName,
  time,
  rating,
}: PropsWithChildren<RestaurantCardProps>) => {
  return (
    <>
      <div
        className={
          "h-fit w-fit  border-none  shadow-2xl rounded-3xl overflow-hidden"
        }
      >
        <img src={restaurantImage} alt="Chicken" />
        <div className={"p-4"}>
          <div
            className={
              "bg-yellow-secondary border rounded-md border-none w-fit px-2"
            }
          >
            <p className={"text-yellow-primary"}> {tagText} </p>
          </div>
          <p className={" text-2xl font-semibold text-dark-black"}>
            {restaurantName}
          </p>
          <div className={"flex flex-row justify-between  "}>
            <div className={"flex gap-3 items-center"}>
              <p className={" text-lg text-dark-tertiary"}>{time}</p>
              <img className={" h-4 w-4"} src={StarIcon} alt="Star" />
              <p className={" text-lg text-dark-tertiary"}>{rating}</p>
            </div>
            <div
              className={
                "border  rounded-3xl bg-gray-secondary   w-8 h-8 flex  justify-center items-center"
              }
            >
              <img src={BookMark} alt="Bookmark" className={"w-4 h-4"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantCard;
