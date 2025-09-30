import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaBars } from "react-icons/fa";
import IconAcademade from "../../molecules/IconAcademade/IconAcademade.molecul";
import Cookies from "js-cookie";
import sessionSlice from "../../../config/redux/Session/sessionSlice/sessionSlice";
import useHTTP from "../../../utils/hooks/useHTTP";
import useSWR from "swr";
import pict from "/images/picture.avif";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavigationBar({ toggleSidebar, isSidebarOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getRequest } = useHTTP();

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(sessionSlice.actions.removeToken());
    navigate("/");
  };

  const { data: profile } = useSWR("/user/info", getRequest);

  return (
    <nav 
      className={`fixed top-0 right-0 z-30 transition-all duration-300 ease-in-out ${
        isSidebarOpen 
          ? "left-0 lg:left-64" 
          : "left-0 lg:left-20"
      }`}
    >
      <div className="flex items-center justify-between mx-4 md:mx-8 my-4 px-4 md:px-10 bg-warning-10 h-16 shadow-xl rounded-2xl">
        {/* Left Section: Hamburger (Mobile) + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-warning-20 transition-colors"
            aria-label="Toggle sidebar"
          >
            <FaBars size={20} />
          </button>

          {/* Logo */}
          <IconAcademade />
        </div>

        {/* Right Section: Profile Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2 md:gap-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-warning-30 focus:ring-offset-2">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src={profile?.data?.image ?? pict}
              alt="avatar"
            />
            <h2 className="hidden sm:block text-base md:text-lg font-medium">
              {profile?.data?.name ?? "Admin"}
            </h2>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/profile"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    My Profile
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700 w-full text-start"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}

export default NavigationBar;