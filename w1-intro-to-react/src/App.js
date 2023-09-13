import logo from "./logo.svg"
import "./App.css"
import Image from "./Components/Image"
import { useState } from "react"

function App() {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <Image src={logo} alt='Logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={handleIncrement}>+1</button>
                <button onClick={handleDecrement}>-1</button>
                <p>{counter}</p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
