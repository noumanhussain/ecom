import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function AdminProfileIndex() {
    return (
        <>
            <Head title="Admin - Profile" />
            <div className="min-h-screen bg-gray-100">
                {/* Admin Navigation */}
                <nav className="bg-gray-800">
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
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Dashboard
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
                                        <Link
                                            href="/admin/profile"
                                            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    View Website
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Admin Content */}
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-2xl font-semibold text-gray-900">
                            Admin Profile
                        </h1>
                        <div className="mt-6">
                            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-gray-500">
                                        Admin profile management will go here.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
