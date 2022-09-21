import React, { useRef } from "react";
import img1 from "../../assets/images/products/product-2.jpg";
import { useSelector } from "react-redux";
export default function Cart() {
    const pdId = useRef();
    const quantityMinus = (e) => {
        e.preventDefault();
        const currentVal = parseInt(pdId.current.value);
        if (currentVal >= 2) {
            pdId.current.value = currentVal - 1;
        }
    };
    const quantityPlus = (e) => {
        e.preventDefault();
        const currentVal = parseInt(pdId.current.value);

        if (currentVal >= 1) {
            pdId.current.value = currentVal + 1;
        }
    };
    const cart = useSelector((state) => state);
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-medium text-center mt-8 py-4">
                Shopping Cart
            </h2>
            <hr />
            <div className="card-body mt-4 border rounded-sm">
                <div className="grid grid-cols-3">
                    <div className="col-span-2 ">
                        <h4 className="text-center font-medium text-2xl">
                            Products
                        </h4>
                        <hr />
                        <div className="cart-products">
                            <div className="cart-product border rounded-sm p-2 m-2">
                                <div className="cart-product-body flex items-center justify-between">
                                    <div className="cart-product-thumb">
                                        <img
                                            src={img1}
                                            className="w-2/5"
                                            alt=""
                                        />
                                    </div>
                                    <div className="cart-product-details">
                                        <h4>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                        </h4>
                                        <h5>Category</h5>
                                        <div className="addition-info flex gap-2">
                                            <h5>
                                                Size: <span>M</span>
                                            </h5>
                                            <h5>
                                                Color: <span>Black</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="quantity ml-4">
                                        <form action="">
                                            <p className="qty  text-center">
                                                <label htmlFor="qty">
                                                    Quantity:
                                                </label>
                                                <br />
                                                <button
                                                    className="qtyminus ml-2 py-2 px-4 bg-siteGray-100"
                                                    aria-hidden="true"
                                                    onClick={quantityMinus}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    name="qty"
                                                    id="qty"
                                                    defaultValue={1}
                                                    className="w-3/12 mx-2 border p-2"
                                                    ref={pdId}
                                                />
                                                <button
                                                    className="qtyplus py-2 px-4 bg-siteGray-100"
                                                    aria-hidden="true"
                                                    onClick={quantityPlus}
                                                >
                                                    +
                                                </button>
                                            </p>
                                        </form>
                                    </div>
                                    <div className="cart-product-price">
                                        <h4>Total</h4>

                                        <h4>
                                            $<span>1230</span>
                                        </h4>
                                    </div>
                                    <div className="remove-from-cart">
                                        <button
                                            className="trash-btn mx-4"
                                            title="Remove Product"
                                        >
                                            {/* Trash Icon  */}
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
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product border rounded-sm p-2 m-2">
                                <div className="cart-product-body flex items-center justify-between">
                                    <div className="cart-product-thumb">
                                        <img
                                            src={img1}
                                            className="w-2/5"
                                            alt=""
                                        />
                                    </div>
                                    <div className="cart-product-details">
                                        <h4>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                        </h4>
                                        <h5>Category</h5>
                                        <div className="addition-info flex gap-2">
                                            <h5>
                                                Size: <span>M</span>
                                            </h5>
                                            <h5>
                                                Color: <span>Black</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="quantity ml-4">
                                        <form action="">
                                            <p className="qty  text-center">
                                                <label htmlFor="qty">
                                                    Quantity:
                                                </label>
                                                <br />
                                                <button
                                                    className="qtyminus ml-2 py-2 px-4 bg-siteGray-100"
                                                    aria-hidden="true"
                                                    onClick={quantityMinus}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    name="qty"
                                                    id="qty"
                                                    defaultValue={1}
                                                    className="w-3/12 mx-2 border p-2"
                                                />
                                                <button
                                                    className="qtyplus py-2 px-4 bg-siteGray-100"
                                                    aria-hidden="true"
                                                    onClick={quantityPlus}
                                                >
                                                    +
                                                </button>
                                            </p>
                                        </form>
                                    </div>
                                    <div className="cart-product-price">
                                        <h4>Total</h4>

                                        <h4>
                                            $<span>1230</span>
                                        </h4>
                                    </div>
                                    <div className="remove-from-cart">
                                        <button
                                            className="trash-btn mx-4"
                                            title="Remove Product"
                                        >
                                            {/* Trash Icon  */}
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
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
