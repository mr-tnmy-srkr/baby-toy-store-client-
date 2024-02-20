import { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { BsSun } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext, useTheme } from "../../hook";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user, logOut } = useAuthContext();
  const [show, setShow] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // console.log(show);
  const NavLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline  font-bold text-lg dark:text-white"
              : "text-lg font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline  dark:text-white font-bold text-lg"
              : "text-lg font-medium"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline  dark:text-white font-bold text-lg"
              : "text-lg font-medium"
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  //logout
  const handleLogout = () => {
    user &&
      logOut()
        .then(() => {
          toast.info("Logout successful!");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
  };

  return (
    <div className=" ">
      <div className="navbar bg-gray-100 shadow-lg px-0 dark:bg-gray-800 dark:text-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden p-0 px-1"
            >
              {isOpen ? (
                <HiMenuAlt1 size={30}></HiMenuAlt1>
              ) : (
                <CgCloseR size={30}></CgCloseR>
              )}
            </label>
            {isOpen || (
              <ul
                tabIndex={0}
                className={` menu-sm dropdown-content mt-3 z-[1] p-5 shadow rounded-box w-48 top-11 space-y-3 bg-white dark:bg-gray-800 dark:text-gray-100`}
              >
                {NavLinks}
              </ul>
            )}
          </div>
          <Link
            to="/"
            className="font-bold text-xl md:text-2xl cursor-pointer text-center flex items-center"
          >
            <div className="">
              {/* <img className="h-10 w-14" src={shopify} alt="" /> */}
            </div>
            <div className="hidden md:block">
              <span className="text-[#95BF46] text-5xl">Baby</span>
              <span className="text-[#95BF46]">Toy</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="relative gap-5  menu-horizontal px-1 ">{NavLinks}</ul>
        </div>
        <div className="navbar-end pr-3">
          <div className="mr-3 text-xl font-bold hidden md:block">
            <span className="font-medium text-lg">
              <span className="text-md">Hi, </span>
            </span>
            {user?.displayName}
          </div>
          {/* avatar part */}
          {user ? (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar relative z-10"
            >
              <div className="w-10 rounded-full" onClick={() => setShow(!show)}>
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
          ) : (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar relative z-10"
            >
              <div className="w-10 rounded-full" onClick={() => setShow(!show)}>
                <RxAvatar size={40} />
              </div>
            </label>
          )}

          {/* user info */}

          {user && show && (
            <ul
              tabIndex={0}
              className={`font-bold menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box  absolute top-12 lg:top-12 right-16 space-y-3 dark:bg-gray-800 dark:text-gray-100`}
            >
              <li className="text-2xl ">{user?.displayName}</li>
              <li onClick={handleLogout} className="text-lg cursor-pointer">
                {user && "Logout"}
              </li>
            </ul>
          )}
          {/* login / logout button */}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-info bg-[#95BF46] hover:bg-green-400 border-0 btn-circle capitalize ml-3 px-10 text-white text-lg mr-5"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={handleLogout}>
              <button className="btn btn-primary bg-[#95BF46] hover:bg-green-400 border-0 btn-circle capitalize ml-3 px-10 text-white text-lg mr-5">
                Login
              </button>
            </Link>
          )}
        </div>
        <div className="mr-10">
          <button
            onClick={toggleTheme}
            className=" btn btn-circle btn-outline hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <span className="hover:-rotate-90">
              {theme === "dark" ? (
                <BsSun size={30} />
              ) : (
                <MdDarkMode size={30} />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
