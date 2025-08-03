import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function BestSeller() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const bestSellers = [
        {
            id: 1,
            name: "Sunscreen SPF 60",
            brand: "CONATURAL SUPER activs",
            price: 998,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
            category: "Sunscreen",
        },
        {
            id: 2,
            name: "Vitamin C Skin Serum",
            brand: "CONATURAL SUPER activs",
            price: 1499,
            image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
            category: "Serums",
        },
        {
            id: 3,
            name: "Tea Tree & Neem Face Wash",
            brand: "CONATURAL",
            price: 480,
            image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop&crop=center",
            category: "Face Wash",
        },
        {
            id: 4,
            name: "Hair Growth Shampoo",
            brand: "CONATURAL",
            price: 1615,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
            category: "Hair Care",
        },
        {
            id: 5,
            name: "Aloe Vera Gel",
            brand: "CONATURAL",
            price: 599,
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
            category: "Skincare",
        },
        {
            id: 6,
            name: "Lavender Essential Oil",
            brand: "CONATURAL",
            price: 799,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
            category: "Essential Oils",
        },
        {
            id: 7,
            name: "Vitamin C Cream",
            brand: "CONATURAL",
            price: 899,
            image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
            category: "Face Cream",
        },
        {
            id: 8,
            name: "Coconut Body Lotion",
            brand: "CONATURAL",
            price: 699,
            image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop&crop=center",
            category: "Body Care",
        },
    ];

    const productsPerView = 4;
    const maxIndex = Math.max(0, bestSellers.length - productsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const visibleProducts = bestSellers.slice(
        currentIndex,
        currentIndex + productsPerView
    );

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#367C7C] mb-4">
                        BEST SELLERS
                    </h2>
                    <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                        The fan favourite skin & hair care products
                    </p>
                </div>

                {/* Products Slider */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 shadow-lg transition-all duration-300"
                        aria-label="Previous products"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 shadow-lg transition-all duration-300"
                        aria-label="Next products"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Products Row */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-4 gap-6 max-w-6xl">
                            {visibleProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                >
                                    {/* Product Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-48 object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-4 text-center">
                                        {/* Product Name */}
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {product.name}
                                        </h3>

                                        {/* Price */}
                                        <div className="mb-4">
                                            <span className="text-xl font-bold text-gray-900">
                                                Rs.{product.price}
                                            </span>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button className="w-full bg-white border border-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from(
                            {
                                length: Math.ceil(
                                    bestSellers.length / productsPerView
                                ),
                            },
                            (_, i) => (
                                <button
                                    key={i}
                                    onClick={() =>
                                        setCurrentIndex(i * productsPerView)
                                    }
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        i ===
                                        Math.floor(
                                            currentIndex / productsPerView
                                        )
                                            ? "bg-[#367C7C] scale-125"
                                            : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                    aria-label={`Go to page ${i + 1}`}
                                />
                            )
                        )}
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/best-sellers"
                        className="inline-block bg-[#367C7C] hover:bg-[#2A5F5F] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
                    >
                        View All Best Sellers
                    </Link>
                </div>
            </div>
        </section>
    );
}
