import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminHeader from "../AdminHeader";

export default function Categories({ categories, auth }) {
    return (
        <>
            <Head title="Categories" />
            <div className="min-h-screen bg-gray-100">
                <AdminHeader auth={auth} />

                {/* Categories Content */}
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Categories
                            </h1>
                            <Link
                                href="/admin/categories/create"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Add New Category
                            </Link>
                        </div>

                        <div className="mt-6">
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                ID
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {categories.map((category) => (
                                            <tr key={category.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {category.id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {category.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <Link
                                                        href={`/admin/categories/${category.id}/edit`}
                                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => {
                                                            if (
                                                                confirm(
                                                                    "Are you sure you want to delete this category?"
                                                                )
                                                            ) {
                                                                post(
                                                                    `/admin/categories/${category.id}`,
                                                                    {
                                                                        method: "delete",
                                                                    }
                                                                );
                                                            }
                                                        }}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
