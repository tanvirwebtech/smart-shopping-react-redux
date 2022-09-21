import React from "react";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
    const { product } = props;
    return (
        <div className="product-card border m-2">
            <div className="product-wrapper">
                <div className="product p-2">
                    <div className="product-img">
                        <img
                            src={product?.img}
                            alt=""
                            className={props.imgCls}
                        />
                    </div>
                    <div className="product-info p-2 mt-4">
                        <div className="category">
                            <small>{product?.category}</small>
                        </div>
                        <div className="title my-2">
                            <Link to={`/product/${product?.id}`}>
                                <h4 className="font-medium text-2xl">
                                    {product?.productName}
                                </h4>
                            </Link>
                        </div>
                        <div className="price-rating mt-4 flex justify-between">
                            <div className="price text-primaryYellow font-medium">
                                <h4>
                                    Price: $<span>{product?.price}</span>
                                </h4>
                            </div>
                            <div className="rating">
                                <h4>
                                    Rating: <span>5</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="product-footer p-2 flex justify-between">
                        <div className="add-to-cart-btn">
                            <button className="cart-btn">Add to cart</button>
                        </div>
                        <div className="add-to-wishlist-btn">
                            <button className="cart-btn">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
