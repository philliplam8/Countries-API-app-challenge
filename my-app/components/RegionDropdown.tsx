import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
// ------------------------------------------
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// TODO use https://tailwindui.com/components/application-ui/elements/dropdowns

export default function Dropdown() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div
      className={`h-[60px] w-[200px] px-7 flex align-items shadow-md rounded-lg cursor-pointer
        ${darkMode ? "bg-dark-blue" : "bg-white"}`}
    >
      <select
        name="filter"
        id="filter-region"
        className={`w-full cursor-pointer
        ${darkMode ? "bg-dark-blue" : "bg-white"}`}
      >
        <option value="">Filter by Region</option>
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
    </div>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function TailwindDropdown() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <Menu
      as="div"
      className={`relative inline-block text-left rounded-lg shadow-md ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
    >
      <Menu.Button
        className="h-[60px] w-full inline-flex justify-center items-center px-8 py-4 text-md font-medium shadow-md rounded-lg 
      focus:outline-none focus:rounded-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        Filter by Region
        <ChevronDownIcon className="-mr-1 ml-2 h-6 w-5" aria-hidden="true" />
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
        <Menu.Items
          className={`absolute right-0 z-10 mt-2 w-full sm:w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            darkMode ? "bg-dark-blue" : "bg-white"
          }`}
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={
                    darkMode
                      ? classNames(
                          active
                            ? `bg-[#6d92b2] text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                      : classNames(
                          active
                            ? `bg-light-gray text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                  }
                >
                  Africa
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={
                    darkMode
                      ? classNames(
                          active
                            ? `bg-[#6d92b2] text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                      : classNames(
                          active
                            ? `bg-light-gray text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                  }
                >
                  America
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={
                    darkMode
                      ? classNames(
                          active
                            ? `bg-[#6d92b2] text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                      : classNames(
                          active
                            ? `bg-light-gray text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                  }
                >
                  Asia
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={
                    darkMode
                      ? classNames(
                          active
                            ? `bg-[#6d92b2] text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                      : classNames(
                          active
                            ? `bg-light-gray text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                  }
                >
                  Europe
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={
                    darkMode
                      ? classNames(
                          active
                            ? `bg-[#6d92b2] text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                      : classNames(
                          active
                            ? `bg-light-gray text-gray-900`
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )
                  }
                >
                  Oceania
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
