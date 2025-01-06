import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"

import { tangValue } from "../redux/counter.slice"

export function NestComponent() {
    const [c, setC] = useState(99);

    return (
        <>
        <p>NestComponent</p>
        <Child1 c={c}/>

        <button onClick={() => {
            c += 1;
        }}>+</button>
        </>
    );
}

function Child1({c}) {
    // Lấy state của counterSlice.
    const countSlice = useSelector((store) => {
        return store.counterReducer.value;
    });

    return (
        <>
            <h2>Child 1</h2>
            <p>CounterSlice2:
                {countSlice}
            </p>
            <Child2 c={c} />
        </>
    )
}

function Child2({c}) {
    const dispatch = useDispatch();

    return (
        <>
            <Child3 c={c}/>

            <button
            onClick={() => {
                // Tăng value);
                dispatch(tangValue());
            }}
            className="p-4 text-2xl">+</button>
        </>
    )
}

function Child3({c}) {

    const countValue = useSelector((store) => {
        console.log(store);
        return store.counterReducer.value;
    });

    return (
        <>
            {/* Render State C của component NestComponent */}
            {/*  */}
            <p>C = {c}</p>

            <p>Count Redux: {countValue}</p>
        </>
    )
}