import React, { useState, useEffect } from "react";
import Results from "../Results";
import Pick from "./Pick";

const Result = ({ pick, onScoreChange, onReplayClick }) => {
    const userPick = pick.user;
    const computerPick = pick.computer;
    
    const [ result, setResult ] = useState('');
    const [ showHousePick, setShowHousePick ] = useState(false);
    
    // eslint-disable-next-line
    useEffect(() => {
        const firstWinCase = (userPick.id + 1 > 5) ? (userPick.id + 1) % 5 : userPick.id + 1;
        const secondWinCase = (userPick.id + 3 > 5) ? (userPick.id + 3) % 5 : userPick.id + 3;
        let resultTimer, houseTimer;

        if(userPick.id === computerPick.id) {
            resultTimer = setTimeout(() => setResult(Results.DRAW), 1500);
        } else if(computerPick.id === firstWinCase || 
                computerPick.id === secondWinCase) {
            resultTimer = setTimeout(() => {
                setResult(Results.WIN);
                onScoreChange(Results.WIN);
            }, 1500);
        } else {
            resultTimer = setTimeout(() => {
                setResult(Results.LOSE);
                onScoreChange(Results.LOSE);
            }, 1500);
        }

        houseTimer = setTimeout(() => setShowHousePick(true), 1000);

        return () => {
            clearTimeout(houseTimer);
            clearTimeout(resultTimer);
        };
    }, [])

    return (
        <div className="result">
            <div className="result__container">
                <h3 className="result__container__label result__container__label--you">YOU PICKED</h3>
                <Pick 
                    option={userPick} 
                    result={result === Results.WIN && Results.WIN}
                    isResult 
                />
            </div>
            {
                result &&
                <div className="result__show">
                    <h1>{result !== Results.DRAW && 'YOU'} {result}</h1>
                    <button
                        onClick={onReplayClick}
                    >PLAY AGAIN</button>
                </div>
            }
            {
                showHousePick ?
                <div className="result__container">
                    <h3 className="result__container__label result__container__label--house">THE HOUSE PICKED</h3>
                    <Pick 
                        option={computerPick} 
                        result={result === Results.LOSE && Results.WIN}
                        isResult 
                    />
                </div> :
                <div className="result__container">
                    <h3 className="result__container__label result__container__label--house">THE HOUSE PICKED</h3>
                    <div className="result__container__empty-circle"/>
                </div>
            }
        </div>
    )
}

export default Result;