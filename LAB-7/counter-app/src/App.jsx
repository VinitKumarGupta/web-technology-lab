import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 5);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="app-container">
            <h3>Counter App</h3>
            <div className="counter-box">
                <div className="counter-display">{count}</div>
                <div className="button-group">
                    <button className="btn btn-decrement" onClick={decrement}>
                        Decrease by 1
                    </button>
                    <button className="btn btn-reset" onClick={reset}>
                        Reset to Zero
                    </button>
                    <button className="btn btn-increment" onClick={increment}>
                        Increase by 5
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
