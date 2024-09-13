import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="header bg-white flex flex-wrap justify-between fixed w-full top-0 items-center p-5 border-b border-gray-300 px-12">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <p className="text-purple-primary font-bold">eatly</p>
        </div>

        <div className=" hidden md:flex w-3/4 items-center justify-between ">
          <div className="flex text-base	 text-dark-secondary gap-12">
            <NavLink to={"/menu"}>Menu</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/pricing"}>Pricing</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>

          <div className={"flex gap-2 items-center"}>
            <button
              className=" p-3 text-dark-secondary font-semibold text-base	"
              title={"Login"}
            >
              Login
            </button>
            <button className="p-3 font-semibold bg-purple-primary border-solid border rounded-2xl text-white text-base	">
              Sign Up
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
        {isOpen && (
          <div className={"flex basis-full flex-col items-center "}>
            <NavLink to={"/menu"}>Menu</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/pricing"}>Pricing</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
