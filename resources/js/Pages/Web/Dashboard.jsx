import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function WebDashboard({ auth }) {
    const { post, processing } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post("/logout");
    };

    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white shadow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <h1 className="text-xl font-semibold text-gray-900">
                                        User Dashboard
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/"
                                    className="text-gray-700 hover:text-gray-900 font-medium"
                                >
                                    Back to Website
                                </Link>
                                <Link
                                    href="/admin"
                                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Admin Panel
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    disabled={processing}
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                >
                                    {processing ? "Logging out..." : "Logout"}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h2 className="text-2xl font-bold mb-4">
                                    Welcome to your Dashboard!
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    You are now logged in as {auth.user?.name}.
                                    This is your user dashboard area.
                                </p>
                                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-5 w-5 text-blue-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-blue-800">
                                                User Dashboard Active!
                                            </p>
                                            <p className="text-sm text-blue-700 mt-1">
                                                You can access your personal
                                                dashboard features here.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
