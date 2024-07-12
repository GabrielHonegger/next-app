import { useState } from "react"

function Home() {
    return <Counter />
}

function Counter() {
    const [counter, setCounter] = useState(0);

    function handleCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={handleCounter}>Add</button>
        </div>
    )
}

// This is the component that we want Next.js to render as the Home page.
export default Home