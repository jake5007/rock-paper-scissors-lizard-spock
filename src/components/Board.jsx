import React from "react";

const Board = ({ currentScore }) => {
    return (
        <div className="board">
            <img src="/images/logo-bonus.svg" alt="logo" />
            <div className="board__score">
                <h5>SCORE</h5>
                <h1>{currentScore}</h1>
            </div>
        </div>
    )
}

export default Board;