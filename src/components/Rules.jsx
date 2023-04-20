import React from "react";

const Rules = ({ onCancelClick }) => {
    return (
        <div className="rules">
            <div className="rules__box">
                <div className="rules__box__header">
                    <span>RULES</span>
                    <img 
                        src="/images/icon-close.svg" 
                        alt="close-btn"
                        onClick={onCancelClick}
                    />
                </div>
                <img
                    className="rules__box__image" 
                    src="/images/image-rules-bonus.svg" 
                    alt="rules" 
                />
            </div>
        </div>
    )
}

export default Rules;