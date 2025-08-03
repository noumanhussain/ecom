import React from "react";
import { Head } from "@inertiajs/react";
import AdminHeader from "../AdminHeader";

export default function AdminProfileIndex({ auth }) {
    return (
        <>
            <Head title="Admin - Profile" />
            <div className="min-h-screen bg-gray-100">
                <AdminHeader auth={auth} />

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
