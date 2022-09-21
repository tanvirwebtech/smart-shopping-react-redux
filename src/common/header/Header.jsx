import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import SearchBox from "./headerComponents/SearchBox";

export default function Header() {
    const [navToggle, setNavToggle] = useState(false);
    const handleNavToggle = () => {
        setNavToggle(!navToggle);
        console.log(navToggle);
    };

    return (
        <div>
            <nav className="bg-siteGray-100 border-b border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-700">
                <div className="container flex items-center mx-auto justify-between">
                    <Link to="/" className="flex items-center">
                        <div className="w-2/3 sm:w-full">
                            <img
                                src={logo}
                                className="mr-3"
                                alt="Smart Shopping Logo"
                            />
                        </div>
                    </Link>
                    <SearchBox></SearchBox>
                    <div className="useful-icons">
                        <ul className="flex p-2  bg-siteGray-100 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0  dark:bg-gray-700 dark:border-gray-900">
                            <li class="font-sans p-1 md:inline-block lg:mt-0 ml-2 align-middle ">
                                {/* Cart Icon  */}
                                <Link to="/cart">
                                    <svg
                                        className="w-4 sm:w-5 md:w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li class="font-sans p-1 md:inline-block lg:mt-0 ml-2 align-middle ">
                                {/* Wishlist Icon  */}
                                <svg
                                    className="w-4 sm:w-5 md:w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </li>
                            <li class="font-sans p-1 md:inline-block lg:mt-0 ml-2 align-middle ">
                                {/* User Icon */}
                                <svg
                                    className="w-4 sm:w-5 md:w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className="flex items-center mx-auto">
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                            onClick={handleNavToggle}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={
                                    navToggle ? "hidden w-6 h-6" : "w-6 h-6"
                                }
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className={
                                    navToggle ? "w-6 h-6" : "hidden w-6 h-6"
                                }
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {/* <li class="font-sans block md:inline-block md:mt-0 md:ml-6 align-middle headerNavLink lg:hidden">
                            <Link to="/" role="button" class="relative flex">
                                <svg
                                    class="flex-1 w-8 h-8 fill-current"
                                    viewbox="0 0 24 24"
                                >
                                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                </svg>
                                <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                                    5
                                </span>
                            </Link>
                        </li> */}
                    </div>{" "}
                    <div
                        className={
                            navToggle
                                ? "justify-between items-center w-full md:flex md:w-auto md:order-1"
                                : "hidden justify-center items-center w-full md:flex md:w-auto md:order-1"
                        }
                        id="navbar-default"
                    >
                        <ul className="flex flex-col p-2 mt-4 bg-siteGray-100 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0  dark:bg-gray-700 dark:border-gray-900">
                            <li>
                                <Link
                                    to="/"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/all-products"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    Smart Phones
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    Laptops
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    All Categories
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
