import React, { useState, useEffect } from "react";
import "../Assets/Style/BotSettings.css";
import axios from 'axios';

function BotSettings() {

  // État pour stocker le type d'article sélectionné
  const [selectedType, setSelectedType] = useState("");

  // Tableau des types d'articles
  const articleTypes = ["Jean", "T-shirt", "Pull", "Chaussures"];

  // Les différentes marques disponibles pour chaque type d'article
  const brandsByType = {
    Jean: ["Levi's", "Wrangler", "Diesel"],
    "T-shirt": ["Nike", "Adidas", "Puma"],
    Pull: ["Ralph Lauren", "Tommy Hilfiger", "GAP"],
    Chaussures: ["Nike", "Adidas", "Converse"],
  };
  // Fonction pour gérer la sélection d'un type d'article
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

    const runBot = async () => {
        try {
            const response = await axios.post('http://localhost:9000/api/bot/run');
            alert(response.data);
        } catch (error) {
            alert('An error occurred');
        }
    };

  return (
    <container>
      <div className="container-bot-settings">
        <form className="form-settings">
          <p>Paramètrer le bot:</p>
          {/* Sélection du type d'article dynamique à partir d'un tableau */}
          <select className="ChooseTypeArticle" onChange={handleTypeChange}>
            <option value="">Sélectionnez un type d'article</option>
            {articleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select className="ChooseBrandsArticle">
            <option value="">Sélectionnez une marque</option>
            {selectedType &&
              brandsByType[selectedType].map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
          </select>
        </form>
        <br />
      </div>
      <div className="container-btn">
        <button className="Btn-Search" onClick={runBot}>
          Lancer la recherche
        </button>
      </div>
    </container>
  );
}

export default BotSettings;
