import React, { useEffect, useState } from "react";
import ProductCard from "../../common/productCard/ProductCard";
import ProductSlider from "../../common/productSlider/ProductSlider";

export default function Shop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    let categories = [];
    for (const product of products) {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    }
    console.log(categories);

    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    {products.map((pd) => (
                        <ProductCard product={pd} />
                    ))}
                </div>
            </div>
        </div>
    );
}
