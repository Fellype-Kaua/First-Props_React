import React from "react";
import Card from "./card/Card.jsx";
import "./App.css"
import BlueEyesWhiteDragon from "./card/images/Blue-Eyes.White.Dragon.jpg"
import levelImg from "./card/images/attributes/level.png"
import AttributeLight from "./card/images/attributes/LIGHT.png"
import AttributeSpell from "./card/images/attributes/SPELL.png"
import monsterReborn from "./card/images/monsterReborn.jpeg"


function App() {
  return (
    <div className="App">
      <Card cardType="monster" cardImg={BlueEyesWhiteDragon} levelImg={levelImg} level="8" attribute={AttributeLight} atk="3000" def="2500"/>
      
      <Card cardType="spell" cardImg={monsterReborn} level="0" attribute={AttributeSpell}/>
    </div>
  );
}

export default App;
