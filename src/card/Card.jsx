import React from "react";
import "./Card.css";

function Card(props) {
  const levelArray = Array.from({ length: props.level }, (_, index) => (
    <img src={props.levelImg} alt="" id="level" />
  ));

  return (
    <div id={props.cardType} className="cardContainer">
      <img src={props.cardImg} alt="cardImgAlt" id="cardImage" />

      <div id="inf-Container">
        <div className="level-Attribute">
          <div id="level-Container">
            {levelArray}
          </div>
          <img src={props.attribute} alt="Light" id="cardAttribute" />
        </div>

        <div className="atkDef-Container">
          <div className="atk-def">
            <span>{props.atk}</span>
          </div>
          <div className="atk-def">
            <span>{props.def}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
