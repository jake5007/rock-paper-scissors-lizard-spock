import React from "react";
import Results from "../Results";

const Pick = ({ option, onUserClick, result, isResult=false }) => {
    return (
        <div 
            key={option.id} 
            className={`pentagon__icon pentagon__icon--${option.name} 
                    ${isResult ? 'result__container__icon' : ''} 
                    ${result === Results.WIN && 'result__container__icon--win'}`}
            onClick={isResult ? undefined : () => onUserClick(option)}
        >
            <img src={option.src} alt={option.name} />
        </div>
    )
}

export default Pick;