import FoodImage1 from "../../assets/FoodImage1.png";

const DiscountCard = () => {
  return (
    <>
      <div
        className={
          "bg-purple-primary w-3/4  flex flex-col md:flex-row rounded-3xl m-auto justify-between px-4 py-4 md:px-12 bg-hero-pattern"
        }
      >
        <div className={"flex flex-col justify-center py-4"}>
          <p className={" md:text-7xl text-3xl text-white font-bold "}>
            Get 50%
          </p>
          <div
            className={
              "bg-white flex flex-row justify-end items-center p-2 md:p-3 md:gap-4 md:mt-2 rounded-3xl overflow-hidden "
            }
          >
            <input
              placeholder={"Enter Your Email "}
              className={" bg-transparent text-xs"}
            />
            <button
              className={
                "bg-purple-primary md:p-2 text-gray-primary text-xs  p-2 rounded-xl"
              }
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className={"h-24"}>
          <img
            src={FoodImage1}
            alt={"FoodImage1"}
            className={"md:translate-y-1/4 translate-y-1"}
          />
        </div>
      </div>
    </>
  );
};
export default DiscountCard;
