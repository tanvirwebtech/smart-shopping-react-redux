import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/actions/cartActions";

export default function Product() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({});
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setNewProduct(products.find((pd) => pd.id === parseInt(id)));
            });
    }, [id, newProduct]);
    const props = {
        width: 400,
        height: 250,
        zoomWidth: 500,
        img: newProduct?.img,
    };

    const dispatch = useDispatch();

    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-3 gap-2">
                    <div className="product-thumb">
                        {newProduct && (
                            <>
                                <img src={newProduct.img} alt="" />{" "}
                            </>
                        )}
                    </div>
                    <div className="product-details col-span-2">
                        {newProduct && <h2>{newProduct.productName} </h2>}
                        <div className="product-btns">
                            <button className="cart-btn mr-2">Buy Now</button>
                            <button
                                className="cart-btn"
                                onClick={() => dispatch(addToCart(newProduct))}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                    <div className="more-info"></div>
                </div>
            </div>
        </div>
    );
}
