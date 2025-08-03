import React from "react";
import { Link } from "@inertiajs/react";

export default function Header({ auth }) {
    return (
        <nav className="bg-white shadow-lg">
            {/* Top Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold text-[#367C7C] tracking-wider">
                            CONATURAL
                        </h1>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full bg-transparent border-b border-gray-400 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#367C7C] py-2 pr-8"
                            />
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* User Icons */}
                    <div className="flex items-center space-x-6">
                        {/* User Profile Icon */}
                        <div className="relative">
                            <svg
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>

                        {/* Wishlist Icon */}
                        <div className="relative">
                            <svg
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                            <div className="absolute -top-2 -right-2 bg-[#367C7C] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </div>
                        </div>

                        {/* Shopping Cart Icon */}
                        <div className="relative">
                            <svg
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                                />
                            </svg>
                            <div className="absolute -top-2 -right-2 bg-[#367C7C] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Header Section - Navigation Links */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* First Row of Navigation Links */}
                    <div className="flex flex-wrap justify-center items-center py-3 space-x-6 text-sm font-medium uppercase tracking-wide">
                        <Link
                            href={route("products.index")}
                            className="text-[#800000] hover:text-[#600000] transition-colors"
                        >
                            CLEARANCE SALE
                        </Link>
                        <Link
                            href={route("products.index")}
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            NEW ARRIVALS
                        </Link>
                        <Link
                            href={route("products.index")}
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            BUNDLES
                        </Link>
                        <Link
                            href="/skin"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            SKIN
                        </Link>
                        <Link
                            href="/serums"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            SERUMS
                        </Link>
                        <Link
                            href="/face-wash"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            FACE WASH
                        </Link>
                        <Link
                            href="/hair-body"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            HAIR & BODY
                        </Link>
                        <Link
                            href="/men"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            MEN
                        </Link>
                        <Link
                            href="/cosmetics"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            COSMETICS
                        </Link>
                        <Link
                            href="/baby-care"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            BABY CARE
                        </Link>
                        <Link
                            href="/gifting"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            GIFTING
                        </Link>
                        <Link
                            href="/salon"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            SALON
                        </Link>
                        <Link
                            href="/hotel"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            HOTEL
                        </Link>
                    </div>

                    {/* Second Row of Navigation Links */}
                    <div className="flex justify-center items-center py-2 space-x-8 text-sm font-medium uppercase tracking-wide">
                        <Link
                            href="/hajj-umrah-kit"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            HAJJ & UMRAH KIT
                        </Link>
                        <Link
                            href="/reviews"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            REVIEWS
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
