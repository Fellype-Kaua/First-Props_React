import React, { useState, useEffect } from "react";
import Card from "./card/Card.jsx";
import "./App.css";
import BlueEyesWhiteDragon from "./card/images/Blue-Eyes.White.Dragon.jpg";
import levelImg from "./card/images/attributes/level.png";
import AttributeLight from "./card/images/attributes/LIGHT.png";
import AttributeDark from "./card/images/attributes/DARK.png";
import AttributeDivine from "./card/images/attributes/DIVINE.png";
import AttributeEarth from "./card/images/attributes/EARTH.png";
import AttributeFire from "./card/images/attributes/FIRE.png";
import AttributeWater from "./card/images/attributes/WATER.png";
import AttributeWind from "./card/images/attributes/WIND.png";
import AttributeSpell from "./card/images/attributes/SPELL.png";
import AttributeTrap from "./card/images/attributes/TRAP.png";
import monsterReborn from "./card/images/monsterReborn.jpeg";
import solemnJudgment from "./card/images/SolemnJudgment.webp";
import indexCardImage from "./card/images/indexCardImage.png"

function App() {
  var cardImagemForm = document.getElementById('cardImagemForm');


  const [cardVariable, setCardVariable] = useState({
    level: 1,
    attack: 0,
    defense: 0,
    cardImage: indexCardImage,
    cardType: "monster",
    attribute: AttributeLight,
  }); // Estado local para o nível

  function showHideMonsterAtkDef() {
    const attackForm = document.getElementById("attackForm");
    const defenseForm = document.getElementById("defenseForm");
    const levelForm = document.getElementById("levelForm");

    if (attackForm && defenseForm && levelForm) {
      if (cardVariable.cardType === "monster") {
        attackForm.style.display = "block";
        defenseForm.style.display = "block";
        levelForm.style.display = "block";
      } else {
        attackForm.style.display = "none";
        defenseForm.style.display = "none";
        levelForm.style.display = "none";
      }
    }
  }

  // Chame a função showHideMonsterAtkDef() dentro de useEffect para garantir que seja chamada após a renderização inicial
  useEffect(() => {
    showHideMonsterAtkDef();
  }, []);

  return (
    <div className="App" onChange={showHideMonsterAtkDef()}>
      <section id="createCard">
        <form>
          <div id="levelForm">
            <span>Level</span>
            <input
              type="number"
              id="level"
              value={cardVariable.level}
              onChange={(e) =>
                setCardVariable({
                  ...cardVariable,
                  level: parseInt(e.target.value),
                })
              }
              min={1}
              max={12}
            />
          </div>
          <div id="attackForm">
            <span>Ataque</span>
            <input
              type="number"
              id="atk"
              value={cardVariable.attack}
              min={0}
              onChange={(e) =>
                setCardVariable({ ...cardVariable, attack: e.target.value })
              }
            />
          </div>
          <div id="defenseForm">
            <span>Defesa</span>
            <input
              type="number"
              id="def"
              value={cardVariable.defense}
              min={0}
              onChange={(e) =>
                setCardVariable({ ...cardVariable, defense: e.target.value })
              }
            />
          </div>

          <div>
            <span>Tipo da carta</span>
            <select
              name="cardType"
              id="cardType"
              onChange={(e) =>
                setCardVariable({ ...cardVariable, cardType: e.target.value })
              }
            >
              <option value="monster">Monstro</option>
              <option value="spell">Magia</option>
              <option value="trap">Armadilha</option>
            </select>
          </div>

          <div>
            <span>Atributo</span>
            <select name="Attribute" id="attributeForm" onChange={(e) =>
              setCardVariable({...cardVariable, attribute: e.target.value})
            }>
              <option value={AttributeLight}>Luz</option>
              <option value={AttributeDark}>Trevas</option>
              <option value={AttributeDivine}>Divino</option>
              <option value={AttributeEarth}>Terra</option>
              <option value={AttributeFire}>Fogo</option>
              <option value={AttributeWater}>Agua</option>
              <option value={AttributeWind}>Vento</option>
              <option value={AttributeSpell}>Magia</option>
              <option value={AttributeTrap}>Armadilha</option>
            </select>
          </div>

          <div>
            <span>Imagem</span>
            <input
              type="file"
              id="cardImagemForm"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();

                reader.onload = (event) => {
                  setCardVariable({
                    ...cardVariable,
                    cardImage: event.target.result, // Atualiza cardImage com o conteúdo da imagem
                  });
                };

                reader.readAsDataURL(file);
              }}
            />
          </div>
          <button>Gerar</button>
        </form>
      </section>
      <Card
        cardType={cardVariable.cardType}
        cardImg={cardVariable.cardImage}
        levelImg={levelImg}
        level={cardVariable.level}
        attribute={cardVariable.attribute}
        atk={cardVariable.attack}
        def={cardVariable.defense}
      />
    </div>
  );
}

export default App;
