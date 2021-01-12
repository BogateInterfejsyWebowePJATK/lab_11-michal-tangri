import React from "react";

import NumberListRandomItem from "./NumberListRandomItem"

export default function NumberListRandom ( { amount = 10, min = 0, max = 10 } ) {
    let listElements = '.'.repeat(amount).split('');
    return (
        <ul>
            {
                listElements.map( (element, i) => ( <NumberListRandomItem key={i} min={min} max={max} /> ))
            }
        </ul>
    );
}