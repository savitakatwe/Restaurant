import logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <div
      className={"bg-gray-tertiary md:mt-24 mt-12 md:px-24 md:py-12 px-4 py-10"}
    >
      <div className={"justify-between flex flex-row"}>
        <div className="flex md:gap-2 gap-2 items-center">
          <img src={logo} alt="logo" />
          <p className="text-purple-primary font-bold">eatly</p>
        </div>

        <div className=" flex  items-center justify-between ">
          <div className="flex md:text-base text-xs text-gray-tertiary3 md:gap-12 gap-2">
            <NavLink to={"/menu"}>Menu</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/pricing"}>Pricing</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
        </div>
      </div>
      <div
        className={"border border-solid border-gray-tertiary3 md:my-8  my-5"}
      />
      <div
        className={
          "flex md:flex-row flex-col items-center justify-between md:py-8 gap-4 "
        }
      >
        <p
          className={
            "text-gray-tertiary3 md:text-base text-xs md:order-1 order-2 "
          }
        >
          © 2023 EATLY All Rights Reserved.
        </p>
        <div className={"flex flex-row md:gap-5 gap-2 md:order-2 order-1"}>
          <InstagramIcon color={"gray"} />
          <LinkedinIcon color={"gray"} />
          <FacebookIcon color={"gray"} />
          <TwitterIcon color={"gray"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
