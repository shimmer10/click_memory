import React from "react";
import "./style.css";

const Score = props => {
    return (
    <div>
        <h2 className="score">Current Score: {props.currentScore}</h2>
        <h2>High Score: {props.highScore}</h2>
        <h2>{props.message}</h2>
    </div>
    )
};

export default Score;