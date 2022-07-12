import { Disclosure } from "@headlessui/react";
import { UserCircleIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/logo.png";
import { BtnDropdown } from "../btnDropdown/BtnDropdown";
import { Link } from "react-router-dom";

import { CartWidget } from "../cartWidget/CartWidget";

const navigation = [
  { name: "Productos", href: "/Productos", current: true },
  { name: <BtnDropdown></BtnDropdown>, current: false },
  { name: "PC armadas", href: "/PcArmada", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-green-800 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm: sm:justify-start">
                <div className="flex-shrink-0 flex items-center text">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-20 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden lg:block h-20 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <ul className="flex space-x-4">
                    <li>
                      <Link
                        to="/Productos"
                        className="text-green-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
                      >
                        Productos
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/"
                        className="text-green-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
                      >
                        <BtnDropdown></BtnDropdown>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PcArmada"
                        className="text-green-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
                      >
                        PC armadas
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="xl:w-96">
                <div class="input-group relative flex items-stretch">
                  <input
                    type="search"
                    class="form-control mr-3 relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-green-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    placeholder="Buscar productos o marcas"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn inline-block px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-gren-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out items-center"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <CartWidget />
                <button
                  type="button"
                  className="bg-green-800 p-1 rounded-full text-green-400 hover:text-white focus:outline-none"
                >
                  <span className="sr-only">View notifications</span>
                  <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-green-900 text-white"
                      : "text-green-300 hover:bg-green-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

// {/* <div class="xl:w-96">
//       <div class="input-group relative flex items-stretch">
//         <input type="search" class="form-control mr-3 relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-green-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
//         <button class="btn inline-block px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-gren-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2">
//           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//             <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
//           </svg>
//         </button>
//       </div>
//     </div> */}
