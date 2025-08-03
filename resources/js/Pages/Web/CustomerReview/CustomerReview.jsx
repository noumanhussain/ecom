import React, { useState } from "react";

export default function CustomerReview() {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            location: "New York, USA",
            rating: 5,
            review: "I absolutely love the Vitamin E Face Wash! It's gentle on my sensitive skin and leaves it feeling refreshed. The natural ingredients make all the difference. Highly recommended!",
            product: "Vitamin E Face Wash",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            verified: true,
        },
        {
            id: 2,
            name: "Maria Rodriguez",
            location: "Los Angeles, USA",
            rating: 5,
            review: "The Organic Rose Serum has transformed my skincare routine. My skin looks brighter and more youthful. The quality is exceptional and worth every penny!",
            product: "Organic Rose Serum",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            verified: true,
        },
        {
            id: 3,
            name: "Emily Chen",
            location: "San Francisco, USA",
            rating: 5,
            review: "The Tea Tree & Neem Face Wash is perfect for my acne-prone skin. It's helped clear my breakouts and keeps my skin balanced. Love the natural ingredients!",
            product: "Tea Tree & Neem Face Wash",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            verified: true,
        },
        {
            id: 4,
            name: "Jessica Williams",
            location: "Chicago, USA",
            rating: 5,
            review: "The Hair Growth Shampoo has made such a difference in my hair health. It's thicker and stronger than ever. The natural formula is gentle and effective.",
            product: "Hair Growth Shampoo",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            verified: true,
        },
        {
            id: 5,
            name: "Amanda Davis",
            location: "Miami, USA",
            rating: 5,
            review: "The Aloe Vera Gel is my go-to for soothing irritated skin. It's pure, natural, and works wonders. I use it daily and my skin has never been better!",
            product: "Aloe Vera Gel",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
            verified: true,
        },
        {
            id: 6,
            name: "Rachel Green",
            location: "Seattle, USA",
            rating: 5,
            review: "The Lavender Essential Oil is pure magic! It helps me relax and the quality is outstanding. I use it in my diffuser and for skincare. Absolutely love it!",
            product: "Lavender Essential Oil",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
            verified: true,
        },
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview(
            (prev) => (prev - 1 + reviews.length) % reviews.length
        );
    };

    const goToReview = (index) => {
        setCurrentReview(index);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real reviews from satisfied customers who love our
                        natural products
                    </p>
                </div>

                {/* Reviews Slider */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevReview}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300"
                        aria-label="Previous review"
                    >
                        <svg
                            className="w-6 h-6"
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
                        onClick={nextReview}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300"
                        aria-label="Next review"
                    >
                        <svg
                            className="w-6 h-6"
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

                    {/* Review Content */}
                    <div className="flex justify-center">
                        <div className="max-w-4xl mx-auto">
                            {reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    className={`text-center transition-opacity duration-500 ${
                                        index === currentReview
                                            ? "opacity-100"
                                            : "opacity-0 absolute inset-0"
                                    }`}
                                >
                                    {/* Customer Image */}
                                    <div className="mb-8">
                                        <div className="relative inline-block">
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                                            />
                                            {review.verified && (
                                                <div className="absolute -bottom-2 -right-2 bg-[#367C7C] text-white rounded-full p-1">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex justify-center mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-6 h-6 ${
                                                    i < review.rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                                        "{review.review}"
                                    </blockquote>

                                    {/* Customer Info */}
                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {review.name}
                                        </h4>
                                        <p className="text-gray-600">
                                            {review.location}
                                        </p>
                                    </div>

                                    {/* Product Purchased */}
                                    <div className="inline-block bg-[#367C7C] text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Purchased: {review.product}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToReview(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentReview
                                        ? "bg-[#367C7C] scale-125"
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#367C7C] mb-2">
                            50K+
                        </div>
                        <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#367C7C] mb-2">
                            4.9/5
                        </div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#367C7C] mb-2">
                            100%
                        </div>
                        <div className="text-gray-600">Natural Products</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#367C7C] mb-2">
                            24/7
                        </div>
                        <div className="text-gray-600">Customer Support</div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Join Thousands of Satisfied Customers
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                        Experience the difference that natural, quality products
                        can make
                    </p>
                    <button className="bg-[#367C7C] hover:bg-[#2A5F5F] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
}
