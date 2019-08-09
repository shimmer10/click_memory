import React from "react"
import "./style.css";
import Image from 'react-bootstrap/Image';

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="image-container">
                <Image id={props.id} alt={props.name} src={props.image} onClick={() => props.shuffle(props.id)} rounded/>
            </div>
        </div>
    );
}

export default CharacterCard;