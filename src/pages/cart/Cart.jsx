import React from "react";
import img1 from "../../assets/images/products/product-2.jpg";
export default function Cart() {
    const quantityMinus = (e) => {
        e.preventDefault();
    };
    const quantityPlus = (e) => {
        e.preventDefault();
    };
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
                                <div className="cart-product-body flex items-center">
                                    <div className="cart-product-thumb">
                                        <img
                                            src={img1}
                                            className="w-2/12"
                                            alt=""
                                        />
                                    </div>
                                    <div className="cart-product-details">
                                        <h4>Product Title</h4>
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
                                            <p class="qty">
                                                <label for="qty">
                                                    Quantity:
                                                </label>
                                                <button
                                                    class="qtyminus ml-2 py-2 px-4 bg-siteGray-100"
                                                    aria-hidden="true"
                                                    onClick={quantityMinus}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    name="qty"
                                                    id="qty"
                                                    value="1"
                                                    className="w-3/12 mx-2 border p-2"
                                                    onChange
                                                />
                                                <button
                                                    class="qtyplus py-2 px-4 bg-siteGray-100"
                                                    aria-hidden="true"
                                                    onClick={quantityPlus}
                                                >
                                                    +
                                                </button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product border rounded-sm p-2 m-2">
                                <div className="cart-product-body flex items-center">
                                    <div className="cart-product-thumb">
                                        <img
                                            src={img1}
                                            className="w-2/12"
                                            alt=""
                                        />
                                    </div>
                                    <div className="cart-product-details">
                                        <h4>Product Title</h4>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-product-price">
                        <h4>Prices</h4>

                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
