import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AdminHeader from "../AdminHeader";
import Table, {
    TableRow,
    TableCell,
    TableCellCustom,
} from "@/Components/Table";
import RadioSwitch from "@/Components/RadioSwitch";

export default function Categories({ categories, auth }) {
    const headers = ["ID", "Name", "Slug", "Status", "Actions"];

    const handleDelete = (categoryId) => {
        if (confirm("Are you sure you want to delete this category?")) {
            router.delete(route("admin.categories.destroy", categoryId));
        }
    };

    const handleStatusToggle = (categoryId, currentStatus) => {
        // Prevent any default behavior
        const newStatus = !currentStatus;

        router.patch(
            route("admin.categories.toggle-status", categoryId),
            {
                is_active: newStatus,
            },
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

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
                                href={route("admin.categories.create")}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Add New Category
                            </Link>
                        </div>

                        <div className="mt-6">
                            <Table headers={headers}>
                                {categories.map((category) => (
                                    <TableRow key={category.id}>
                                        <TableCell className="text-gray-500">
                                            {category.id}
                                        </TableCell>
                                        <TableCell>{category.name}</TableCell>
                                        <TableCell>{category.slug}</TableCell>
                                        <TableCell>
                                            <RadioSwitch
                                                id={`status-${category.id}`}
                                                name={`status-${category.id}`}
                                                checked={category.is_active}
                                                onChange={() =>
                                                    handleStatusToggle(
                                                        category.id,
                                                        category.is_active
                                                    )
                                                }
                                                size="md"
                                                color="green"
                                                label={
                                                    category.is_active
                                                        ? "Active"
                                                        : "Inactive"
                                                }
                                            />
                                        </TableCell>
                                        <TableCellCustom>
                                            <Link
                                                href={route(
                                                    "admin.categories.edit",
                                                    category.id
                                                )}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(category.id)
                                                }
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
                                            </button>
                                        </TableCellCustom>
                                    </TableRow>
                                ))}
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
