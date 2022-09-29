import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import ProductCard from "./../productCard/ProductCard";
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="p-4 inline-block bg-siteGray-100 rounded-sm absolute -left-16 top-1/2 -translate-y-1/2"
            onClick={onClick}
        >
            {" "}
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </div>
    );
}
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="p-4 inline-block bg-siteGray-100 rounded-sm absolute -right-16 top-1/2 -translate-y-1/2"
            onClick={onClick}
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </div>
    );
}

export default function ProductSlider(props) {
    const products = useSelector((state) => state.products);

    const { sectionHeading } = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
        ],
    };
    return (
        <div className="container w-10/12 mx-auto mt-10">
            <div className="section-heading mt-4 flex justify-between items-center">
                <h2 className="font-bold text-4xl p-2 text-siteGray-400">
                    {sectionHeading}
                </h2>
                <span className="text-primaryYellow ">See All</span>
            </div>
            <div>
                {products && (
                    <Slider {...settings}>
                        {products.map((product) => (
                            <ProductCard
                                key={product._id}
                                imgCls="w-1/2 mx-auto"
                                product={product}
                            ></ProductCard>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
}
