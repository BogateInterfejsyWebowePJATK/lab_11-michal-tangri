import React from "react"

export default function NumberListRandomItem( {min = 0, max = 10}) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return (
        <li>{randomNumber}</li>
    );
}