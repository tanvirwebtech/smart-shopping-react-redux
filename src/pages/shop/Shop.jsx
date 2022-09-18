import React, { useEffect, useState } from "react";
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
            {products.filter( )}
            <ProductSlider sectionHeading="" />
        </div>
    );
}
