import React from "react";
import "./Card.css";

function Card(props) {
  const levelArray = Array.from({ length: props.level }, (_, index) => (
    <img src={props.levelImg} alt="Imagem da carta" id="level" style={{ maxWidth: '600px' }}/>
  ));

  return (
    <div id={props.cardType} className="cardContainer">
      <img src={props.cardImg} alt="cardImgAlt" id="cardImage" />

      <div id="inf-Container">
        <div className="level-Attribute">
          <div id="level-Container">
            {levelArray}
          </div>
          <div className="attributeContainer">
          <img src={props.attribute} alt="Atributo da carta" id="cardAttribute"/>
          </div>
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
