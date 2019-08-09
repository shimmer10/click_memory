import React from "react"
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="image-container">
                <img id={props.id} alt={props.name} src={props.image} onClick={() => props.shuffle(props.id)} />
            </div>
        </div>
    );
}

export default CharacterCard;