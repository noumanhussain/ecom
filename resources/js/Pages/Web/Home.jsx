import React from "react";
import { Head, Link } from "@inertiajs/react";
import Header from "./Header/Header";
import Slider from "./Slider";
import BestSeller from "./BestSeller/BestSeller";
import CustomerReview from "./CustomerReview/CustomerReview";
import Footer from "./Footer/Footer";

export default function Home({ auth }) {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen bg-gray-50">
                <Header auth={auth} />
                <Slider />
                <BestSeller />
                <CustomerReview />
                <Footer />
            </div>
        </>
    );
}
