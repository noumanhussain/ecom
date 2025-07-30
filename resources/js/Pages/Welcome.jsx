import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white shadow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <h1 className="text-xl font-semibold text-gray-900">
                                        Laravel + Inertia + React
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <>
                                        <span className="text-gray-700">
                                            Welcome, {auth.user.name}!
                                        </span>
                                        <Link
                                            href="/dashboard"
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href="/login"
                                            className="text-gray-700 hover:text-gray-900 font-medium"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h1 className="text-2xl font-bold mb-4">
                                    Welcome to Laravel with Inertia + React!
                                </h1>
                                <p className="text-gray-600 mb-6">
                                    This is a sample page built with Laravel,
                                    Inertia.js, and React. Complete
                                    authentication system is now available.
                                </p>
                                {auth.user ? (
                                    <div className="mt-4">
                                        <p className="text-green-600 font-medium">
                                            You are logged in as{" "}
                                            {auth.user.name}
                                        </p>
                                        <Link
                                            href="/dashboard"
                                            className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Go to Dashboard
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="mt-4 space-x-4">
                                        <p className="text-gray-600 mb-4">
                                            Please log in or register to
                                            continue.
                                        </p>
                                        <Link
                                            href="/login"
                                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
