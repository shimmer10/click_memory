import React from "react"
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="image-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default CharacterCard;