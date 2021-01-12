import React from "react";

import StarRating from "./StarRating"

import { FaTrash } from "react-icons/fa"

export default function CatItem({ id, title, url, date, onRemove }) {
    
    const parseDate = dateToParse => {
        let [date, time] = dateToParse.split('T');
        let dateParts = date.split('-');
        let timeParts = time.split(':')
    
        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]} ${timeParts[0]}:${timeParts[1]}`;
    }

    return (
        <article id="id" style={{ border: "1px solid black", width: "200px", margin: "20px", textAlign: "center", padding: "10px"}}>
            <h3>{title}</h3>
            <img src={url} alt="Probably a cat" width="130px"/>
            <p><i>Upload date: <b>{parseDate(date)}</b></i></p>

            <button onClick={() => onRemove(id)}>
                <FaTrash />Remove kitty
            </button>

            <div style={{ marginTop: "10px"}}>
                <StarRating totalStars={5} />
            </div>
        </article>

        
    );
}