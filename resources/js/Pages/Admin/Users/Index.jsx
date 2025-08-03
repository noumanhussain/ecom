import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminHeader from "../AdminHeader";

export default function AdminUsersIndex({ auth }) {
    return (
        <>
            <Head title="Admin - Users" />
            <div className="min-h-screen bg-gray-100">
                <AdminHeader auth={auth} />

                {/* Admin Content */}
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Users Management
                            </h1>
                            <Link
                                href="/admin/users/create"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Add New User
                            </Link>
                        </div>
                        <div className="mt-6">
                            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-gray-500">
                                        No users found. This is where you would
                                        manage your users.
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
