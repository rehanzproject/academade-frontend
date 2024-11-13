import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import IconAcademade from "../../molecules/IconAcademade/IconAcademade.molecul";
import Cookies from "js-cookie";
import sessionSlice from "../../../config/redux/Session/sessionSlice/sessionSlice";
import useHTTP from "../../../utils/hooks/useHTTP";
import useSWR from "swr";
import pict from "/images/picture.avif";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavigationBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getRequest } = useHTTP();
  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(sessionSlice.actions.removeToken());
    navigate("/");
  };
  const { data: profile } = useSWR("/api/v1/user/info", getRequest);

  return (
    <section className="flex sticky top-4 z-20 max-w-8xl mx-8 my-4 px-10 bg-warning-10 h-16 shadow-xl rounded-2xl">
      <IconAcademade />

      {/* Dropdown Icon */}
      <section className="absolute inset-y-0 right-0 flex items-center pr-10">
        <Menu as="div" className="relative mx-4">
          <Menu.Button className="flex -mb-1 gap-3 rounded-full text-sm focus:ring-white focus:ring-offset-2">
            <img
              className="h-8 w-8 rounded-full"
              src={`${profile?.image ?? pict}`}
              alt="avatar"
            />
            <h2 className="py-1 text-xl font-medium">
              {profile ? profile?.data?.name : "admin"}
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
      </section>
    </section>
  );
}

export default NavigationBar;
