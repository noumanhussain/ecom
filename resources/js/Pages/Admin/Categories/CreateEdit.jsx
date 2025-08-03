import React, { useState, useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function CreateEdit({ category = null, isEditing = false }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: category?.name || "",
        slug: category?.slug || "",
        description: category?.description || "",
        image: category?.image || "",
        is_active: category?.is_active ?? true,
        sort_order: category?.sort_order || 0,
        meta_title: category?.meta_title || "",
        meta_description: category?.meta_description || "",
        meta_keywords: category?.meta_keywords || "",
    });

    const [imagePreview, setImagePreview] = useState(category?.image || "");

    useEffect(() => {
        if (category) {
            setData({
                name: category.name || "",
                slug: category.slug || "",
                description: category.description || "",
                image: category.image || "",
                is_active: category.is_active ?? true,
                sort_order: category.sort_order || 0,
                meta_title: category.meta_title || "",
                meta_description: category.meta_description || "",
                meta_keywords: category.meta_keywords || "",
            });
            setImagePreview(category.image || "");
        }
    }, [category]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            put(route("admin.categories.update", category.id), {
                onSuccess: () => {
                    reset();
                },
            });
        } else {
            post(route("admin.categories.store"), {
                onSuccess: () => {
                    reset();
                },
            });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("image", file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const generateSlug = () => {
        const slug = data.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
        setData("slug", slug);
    };

    return (
        <>
            <Head title={isEditing ? "Edit Category" : "Create Category"} />

            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {isEditing
                                        ? "Edit Category"
                                        : "Create Category"}
                                </h1>
                                <p className="text-gray-600 mt-2">
                                    {isEditing
                                        ? "Update the category information below"
                                        : "Add a new category to your store"}
                                </p>
                            </div>
                            <button
                                onClick={() =>
                                    router.visit(
                                        route("admin.categories.index")
                                    )
                                }
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                            >
                                Back to Categories
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - Basic Information */}
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                        Basic Information
                                    </h2>

                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Category Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-[#367C7C] ${
                                                errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Enter category name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Slug */}
                                    <div>
                                        <label
                                            htmlFor="slug"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Slug *
                                        </label>
                                        <div className="flex">
                                            <input
                                                type="text"
                                                id="slug"
                                                value={data.slug}
                                                onChange={(e) =>
                                                    setData(
                                                        "slug",
                                                        e.target.value
                                                    )
                                                }
                                                className={`flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-[#367C7C] ${
                                                    errors.slug
                                                        ? "border-red-500"
                                                        : "border-gray-300"
                                                }`}
                                                placeholder="category-slug"
                                            />
                                            <button
                                                type="button"
                                                onClick={generateSlug}
                                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 border-l-0 rounded-r-lg transition-colors duration-300"
                                            >
                                                Generate
                                            </button>
                                        </div>
                                        {errors.slug && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.slug}
                                            </p>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            rows="4"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-[#367C7C] ${
                                                errors.description
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Enter category description"
                                        />
                                        {errors.description && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Sort Order */}
                                    <div>
                                        <label
                                            htmlFor="sort_order"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Sort Order
                                        </label>
                                        <input
                                            type="number"
                                            id="sort_order"
                                            value={data.sort_order}
                                            onChange={(e) =>
                                                setData(
                                                    "sort_order",
                                                    parseInt(e.target.value) ||
                                                        0
                                                )
                                            }
                                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-[#367C7C] ${
                                                errors.sort_order
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="0"
                                        />
                                        {errors.sort_order && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.sort_order}
                                            </p>
                                        )}
                                    </div>

                                    {/* Active Status */}
                                    <div>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={data.is_active}
                                                onChange={(e) =>
                                                    setData(
                                                        "is_active",
                                                        e.target.checked
                                                    )
                                                }
                                                className="text-[#367C7C] focus:ring-[#367C7C] border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-sm font-medium text-gray-700">
                                                Active Category
                                            </span>
                                        </label>
                                        {errors.is_active && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.is_active}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Right Column - Image and SEO */}
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                        Image & SEO
                                    </h2>

                                    {/* Image Upload */}
                                    <div>
                                        <label
                                            htmlFor="image"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Category Image
                                        </label>
                                        <div className="space-y-4">
                                            <input
                                                type="file"
                                                id="image"
                                                onChange={handleImageChange}
                                                accept="image/*"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-[#367C7C]"
                                            />
                                            {imagePreview && (
                                                <div className="relative">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Category preview"
                                                        className="w-full h-48 object-cover rounded-lg border border-gray-200"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setImagePreview("");
                                                            setData(
                                                                "image",
                                                                ""
                                                            );
                                                        }}
                                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        {errors.image && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.image}
                                            </p>
                                        )}
                                    </div>

                                    {/* Meta Title */}
                                    <div>
                                        <label
                                            htmlFor="meta_title"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Meta Title
                                        </label>
                                        <input
                                            type="text"
                                            id="meta_title"
                                            value={data.meta_title}
                                            onChange={(e) =>
                                                setData(
                                                    "meta_title",
                                                    e.target.value
                                                )
                                            }
                                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-[#367C7C] ${
                                                errors.meta_title
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="SEO title for search engines"
                                        />
                                        {errors.meta_title && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.meta_title}
                                            </p>
                                        )}
                                    </div>

                                    {/* Meta Description */}
                                    <div>
                                        <label
                                            htmlFor="meta_description"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Meta Description
                                        </label>
                                        <textarea
                                            id="meta_description"
                                            rows="3"
                                            value={data.meta_description}
                                            onChange={(e) =>
                                                setData(
                                                    "meta_description",
                                                    e.target.value
                                                )
                                            }
                                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-[#367C7C] ${
                                                errors.meta_description
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="SEO description for search engines"
                                        />
                                        {errors.meta_description && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.meta_description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Meta Keywords */}
                                    <div>
                                        <label
                                            htmlFor="meta_keywords"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Meta Keywords
                                        </label>
                                        <input
                                            type="text"
                                            id="meta_keywords"
                                            value={data.meta_keywords}
                                            onChange={(e) =>
                                                setData(
                                                    "meta_keywords",
                                                    e.target.value
                                                )
                                            }
                                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-[#367C7C] ${
                                                errors.meta_keywords
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="keyword1, keyword2, keyword3"
                                        />
                                        {errors.meta_keywords && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.meta_keywords}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="flex items-center justify-end space-x-4 pt-8 border-t border-gray-200 mt-8">
                                <button
                                    type="button"
                                    onClick={() =>
                                        router.visit(
                                            route("admin.categories.index")
                                        )
                                    }
                                    className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2 bg-[#367C7C] hover:bg-[#2A5F5F] text-white font-medium rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing
                                        ? "Saving..."
                                        : isEditing
                                        ? "Update Category"
                                        : "Create Category"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
