import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Dashboard from "../../assets/category.svg";
import Cards from "../../assets/post 2.svg";
import Calendery from "../../assets/calendar 2.svg";
// import {
//   EventIcon,
//   cardIcons,
//   DashboardIcon,
// } from "../../assets/ComponentIcon";

export default function SideBar({ open, setOpen }) {
  // const { user, update } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {}, [location.pathname]);
  return (
    <div
      className={
        open
          ? "w-3/5 h-full fixed z-50 overflow-auto flex flex-col bg-[#F2F2F2] transition  left-0 top-0  transform translate-x-0  "
          : "md:w-1/5 h-screen fixed z-50 overflow-auto lg:flex flex-col bg-[#F2F2F2] hidden transition"
      }
    >
      <div className="flex flex-col w-2/3 m-auto mt-4 gap-10 ">
        <div className="w-full h-4 flex justify-end lg:hidden ">
          <button
            onClick={() => {
              setOpen();
            }}
          >
            <AiOutlineClose size="25px" className="text-blu" />
          </button>
        </div>
        <div className="w-full m-auto h-28 flex flex-col justify-between text-center lg:mt-5 ">
          {/* <img src={logo} alt="logo" /> */}
          <p className=" font-logo text-blu font-bold text-3xl">Roadie</p>
          <Link to="/new/card">
          <button className=" bg-blue bg-[#183BB7] text-white p-2 rounded-md  text-lg">
            <span className="text-2xl font-semibold">+</span> Post New Card
          </button>
          </Link>
        </div>

        <div className="w-full m-auto flex flex-col items-center gap-4 ">
          <div className="group group1">
            <Link to="/" className="flex gap-3 text-left w-40 ">
              <p>
                <img
                  src={Dashboard}
                  //   color={location.pathname === "/" ? "white" : "gray"}
                  className=" w-6 h-6 mt-1 group-hover:text-blu "
                />
              </p>{" "}
              <p className=" font-font group-hover:text-blu text-gray-500 text-lg ">
                Dashboard
              </p>
            </Link>
          </div>

          <div className="group7 group">
            <Link to="/cards" className="flex gap-3 w-40 text-left">
              <p>
                <img
                  src={Cards}
                  //   color={location.pathname === "/" ? "white" : "gray"}
                  className=" w-6 h-6 mt-1 group-hover:text-blu "
                />
              </p>{" "}
              <p className=" font-font group-hover:text-blu text-gray-500 text-lg ">
                Cards
              </p>
            </Link>
          </div>
          <div className="group7 group">
            <Link to="/events" className="flex gap-3 w-40 text-left">
              <p>
                <img
                  src={Calendery}
                  //   color={location.pathname === "/" ? "white" : "gray"}
                  className=" w-6 h-6 mt-1 group-hover:text-blu "
                />
              </p>{" "}
              <p className=" font-font group-hover:text-blu text-gray-500 text-lg ">
                Events
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-5/6 m-auto mb-10 gap-[5%] items-center ">
        <button
          onClick={() => {
            signout().then(() => {
              update({});
              sessionStorage.removeItem(
                "firebase:authUser:AIzaSyDuX08nZV7p6cIZAGJMc8l_ujU1zBUsArw:[DEFAULT]"
              );
              navigate("/login");
            });
          }}
          className="flex gap-2 items-center"
        >
          <RiLogoutCircleRLine size="30px" className="text-red-400" />
          <p className="text-red-400">logout</p>
        </button>
      </div>
    </div>
  );
}
