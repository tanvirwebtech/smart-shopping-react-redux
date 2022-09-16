import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
export default function Home() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state);

    console.log(count);
    return (
        <div>
            <div className="counter">
                {count?.map((dop) => (
                    <span>{dop}</span>
                ))}
            </div>
            <div className="button">
                <button
                    onClick={() => dispatch({ type: "ADD", payload: "kabul" })}
                >
                    Increase
                </button>
                <button onClick={() => dispatch({ type: "REMOVE" })}>
                    Decrease
                </button>
            </div>
        </div>
    );
}
