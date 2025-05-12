import { useState } from "react";
import "./Counter.css";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);

    function updateCount(value){
        if (value >10 ) {
            setError(true);
            throw new Error("Le compteur ne peut pas dépasser 10");
        }
        setError(false);
        setCount(value);
    }
    return (
        <div className="counter">
            <h4>Compteur</h4>
            <h1 className="counter-value">{count}</h1>
            
            <div className="counter-buttons">
                <button className="counter-button" aria-label="Décrémenter" onClick={() => updateCount(count - 1)}>
                    -
                </button>

                <button className="counter-button" aria-label="Réinitialiser" onClick={() => updateCount(0)}>
                    Reset
                </button>

                <button className="counter-button" aria-label="Incrémenter" onClick={() => updateCount(count + 1)}>
                    +
                </button>
            </div>

            {error &&
                <span className="counter-error">Le compteur ne peut pas dépasser 10</span>
            }
        </div>
    )
}