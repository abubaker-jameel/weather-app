import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import navListData from "../data/navListData";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const navList = navListData.map((item) => {
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1"
      key={item.id}
    >
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          isActive ? " font-bold" : "p-1 font-normal"
        }
      >
        {item.name}
      </NavLink>
    </Typography>
  );
});

export function Header() {
  const [openNav, setOpenNav] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (user) {
      dispatch(logout());
      signOut(auth);
    }
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <Navbar className="mx-auto max-w-screen-xl py-1 px-4 lg:px-8 lg:py-2 fixed top-5 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Weather App
        </Typography>
        <div className="hidden lg:block">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navList}
          </ul>
        </div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block"
          onClick={handleLogout}
        >
          <NavLink to={user ? "/" : "/sign-in"}>
            {user ? "Sign Out" : "Sign In"}
          </NavLink>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navList}
          </ul>
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2"
            onClick={handleLogout}
          >
            <NavLink to={user ? "/" : "/sign-in"}>
              {user ? "Sign Out" : "Sign In"}
            </NavLink>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
