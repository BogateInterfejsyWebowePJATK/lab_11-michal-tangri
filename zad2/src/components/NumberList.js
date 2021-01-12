import React from "react";

import NumberListItem from "./NumberListItem"
import RefreshButton from "./RefreshButton";

export default function NumberList({ numbers, onRefreshList = f => f }) {
    return (
        <>
            <ul>
                {
                    numbers.map((number, i) => (<NumberListItem key={i} value={number} />))
                }
            </ul>
            <RefreshButton onRefresh={onRefreshList} />
        </>
    );
}