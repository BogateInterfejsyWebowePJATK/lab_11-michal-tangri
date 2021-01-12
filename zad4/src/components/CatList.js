import React from "react";

import CatItem from "./CatItem";

import { FiRefreshCcw } from "react-icons/fi"

export default function CatList({ data, onCatRemove = f => f, onSortByDate = f => f, onSortByTitle = f => f }) {
    return (
        <section>

            <button onClick={() => onSortByDate('newest')}>
                <FiRefreshCcw />Sort by date (newest)
            </button>

            <button onClick={() => onSortByDate('oldest')}>
                <FiRefreshCcw />Sort by date (oldest)
            </button>

            <button onClick={() => onSortByTitle('a-z')}>
                <FiRefreshCcw />Sort by title (A-Z)
            </button>

            <button onClick={() => onSortByTitle('z-a')}>
                <FiRefreshCcw />Sort by title (Z-A)
            </button>

            {
                data.map((cat, i) => <CatItem key={i}  {...cat} onRemove={onCatRemove} />)
            }

        </section>


    );
}