import MaskBg from "../../assets/MaskBg.png";
import MaskBg2 from "../../assets/MaskBg2.png";

const DiscountCard = () => {
  return (
    <>
      <div
        className={
          "bg-purple-primary w-fit flex items-center justify-center border-none rounded-3xl overflow-hidden m-auto"
        }
      >
        <div className={"flex flex-row relative justify-between items-center "}>
          <img src={MaskBg2} alt={"MaskGroupImage2"} />
          <img src={MaskBg} alt={"MaskGroupImage1"} />
          <div className={"absolute ml-8"}>
            <p className={" md:text-7xl text-2xl text-white font-bold "}>
              Get 50% Off
            </p>
            <div
              className={
                "bg-white flex flex-row justify-between h-fit p-3 gap-4 rounded-3xl overflow-hidden "
              }
            >
              <input
                placeholder={"Enter Your Email "}
                className={" bg-transparent"}
              />
              <button
                className={
                  "bg-purple-primary md:p-4 text-gray-primary text-sm rounded-2xl"
                }
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DiscountCard;
