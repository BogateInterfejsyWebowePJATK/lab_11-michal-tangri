import './App.css';

import { useState } from "react";

import CatList from "./components/CatList";
import data from "./data/photos.json";

function App() {
    const [cats, setCats] = useState(data)

    const removeCat = id => {
        setCats(cats.filter(cat => { return cat.id !== id }))
    };

    const sortByDate = order => {
        let sorted = cats;
        switch (order) {
            case 'newest':
                setCats(sorted.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1));
                break;

            case 'oldest':
                setCats(sorted.sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1));
                break;

            default: break;
        }
    }

    const sortByTitle = order => {
        let sorted = cats;
        switch (order) {
            case 'a-z':
                setCats(sorted.sort((a, b) => a.title < b.title ? 1 : -1));
                break;

            case 'z-a':
                setCats(sorted.sort((a, b) => a.title > b.title ? 1 : -1));
                break;

            default: break;
        }
    }

    return (
        <CatList data={cats} onCatRemove={removeCat} onSortByDate={sortByDate} onSortByTitle={sortByTitle} />
    );
}

export default App;
