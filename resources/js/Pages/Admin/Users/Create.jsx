import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminHeader from "../AdminHeader";

export default function AdminUsersCreate({ auth }) {
    return (
        <>
            <Head title="Admin - Create User" />
            <div className="min-h-screen bg-gray-100">
                <AdminHeader auth={auth} />

                {/* Admin Content */}
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Create New User
                            </h1>
                            <Link
                                href="/admin/users"
                                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Back to Users
                            </Link>
                        </div>
                        <div className="mt-6">
                            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 sm:p-6">
                                    <p className="text-gray-500">
                                        User creation form will go here.
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
