import './App.css';
import { useState } from "react"

import NumberList from "./components/NumberList";

function generateRandomNumbers(min, max, amount) {
    let numbers = [];
    for (let i = 0; i < amount; i++)
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    return numbers;
}

function App() {
    const min = 0, max = 100, amount = 10;
    const [numbers, setNumbers] = useState(generateRandomNumbers(min, max, amount));
    return ( <NumberList numbers={numbers} onRefreshList={() => { setNumbers(generateRandomNumbers(min, max, amount)); }} /> 
    );
}

export default App;
