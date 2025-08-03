import React from "react";
import { Link } from "@inertiajs/react";
import "./header.css";

export default function Header({ auth, categories }) {
    return (
        <nav className="header-nav">
            {/* Top Header Section */}
            <div className="header-top">
                <div className="header-top-content">
                    {/* Logo */}
                    <div className="header-logo">
                        <h1 className="header-logo-text">PURE'DROPS</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="header-search">
                        <div className="header-search-container">
                            <input
                                type="text"
                                placeholder="Search"
                                className="header-search-input"
                            />
                            <div className="header-search-icon">
                                <svg
                                    className="header-search-svg"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* User Icons */}
                    <div className="header-user-icons">
                        {/* User Profile Icon */}
                        <div className="header-icon-container">
                            <svg
                                className="header-icon-svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>

                        {/* Wishlist Icon */}
                        <div className="header-icon-container">
                            <svg
                                className="header-icon-svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                            <div className="header-badge">0</div>
                        </div>

                        {/* Shopping Cart Icon */}
                        <div className="header-icon-container">
                            <svg
                                className="header-icon-svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                                />
                            </svg>
                            <div className="header-badge">0</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Header Section - Navigation Links */}
            <div className="header-bottom">
                <div className="header-bottom-content">
                    {/* Navigation Links from Categories */}
                    <div className="header-nav-row">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/${category.slug}`}
                                className="header-nav-link"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
