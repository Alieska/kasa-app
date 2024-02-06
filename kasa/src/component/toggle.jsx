import fleche from "../assets/arrow_back_ios-24px2.svg";
import React, { useState } from "react";

const Toggle = ({ TitreParagraphe, TextApropos }) => {
 
  const [isToggleOn, setIsToggleOn] = useState(false); 

  const display = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className="collapse">
      <div className="collapse_barreTitre">
      <h2 className="collapse_barreTitre_titre">{TitreParagraphe}</h2>
      <button onClick={display} className={isToggleOn ? "collapse_barreTitre_bouton-active" : "collapse_barreTitre_bouton"}>
          <img className="collapse_barreTitre_fleche" src={fleche} alt="flèche déploiement"  />
        </button>
      </div>
      <div className="collapse_divparagraphe">
        {isToggleOn && <p className="collapse_paragraphe">{TextApropos}</p>}
      </div>
    </div>
  );
};

export default Toggle;