import React from "react";
import { Link, useForm } from "@inertiajs/react";

export default function AdminHeader({ auth }) {
    const { post, processing } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post("/admin/logout");
    };

    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-white text-xl font-bold">
                                Admin Panel
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    href="/admin"
                                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/admin/categories"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Categories
                                </Link>
                                <Link
                                    href="/admin/products"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Products
                                </Link>
                                <Link
                                    href="/admin/users"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Users
                                </Link>
                                <Link
                                    href="/admin/settings"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Settings
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {auth.user && (
                            <span className="text-gray-300 text-sm">
                                Welcome, {auth.user.name}
                            </span>
                        )}
                        <Link
                            href="/"
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            View Website
                        </Link>
                        <button
                            onClick={handleLogout}
                            disabled={processing}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 transition-colors duration-200"
                        >
                            {processing ? "Logging out..." : "Logout"}
                        </button>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        href="/admin"
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/categories"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Categories
                    </Link>
                    <Link
                        href="/admin/products"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Products
                    </Link>
                    <Link
                        href="/admin/users"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Users
                    </Link>
                    <Link
                        href="/admin/settings"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Settings
                    </Link>
                </div>
            </div>
        </nav>
    );
}
