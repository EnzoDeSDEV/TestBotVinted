import React, { useState, useEffect } from "react";
import "../Assets/Style/BotSettings.css";
import axios from "axios";

function BotSettings() {
  // État pour stocker le type d'article sélectionné

  const [selectedType, setSelectedType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [inputValueMin, setInputValueMin] = useState("");
  const [inputValueMax, setInputValueMax] = useState("");

  // Tableau des types d'articles
  const articleTypes = ["Jean", "T-shirt", "Pull", "Chaussures"];

  // Les différentes marques disponibles pour chaque type d'article
  const brandsByType = {
    Jean: ["Levi's", "Wrangler", "Diesel"],
    "T-shirt": ["Nike", "Adidas", "Puma"],
    Pull: ["Ralph Lauren", "Tommy Hilfiger", "GAP"],
    Chaussures: ["Nike", "Adidas", "Converse"],
  };

  const SizeByType = {
    Jean: [
      "XS / 34",
      "S / 36",
      "S / 38",
      "M / 40",
      "M / 42",
      "L / 44",
      "L / 46",
      "XL / 48",
      "XL / 50",
      "XL / 52",
    ],
    "T-shirt": ["XXS", "XS", "S", "M", "L", "XL"],
    Pull: ["XXS", "XS", "S", "M", "L", "XL"],
    Chaussures: [
      "35",
      "35,5",
      "36",
      "36,5",
      "37",
      "37,5",
      "38",
      "38,5",
      "39",
      "39,5",
      "40",
      "40,5",
      "41",
      "41,5",
      "42",
      "42,5",
      "43",
      "43,5",
      "44",
      "44,5",
      "45",
    ],
  };
  // Fonction pour gérer la sélection d'un type d'article
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    console.log("Article sélectionnée :", e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    console.log("Marque sélectionnéée :", e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    console.log("Marque sélectionnéée :", e.target.value);
  };

  const handleInputMinChange = (e) => {
    setInputValueMin(e.target.value);
    console.log("Valeurs :", e.target.value);
  };

  const handleInputMaxChange = (e) => {
    setInputValueMax(e.target.value);
    console.log("Valeurs :", e.target.value);
  };

  const runBot = async () => {
    try {
      const response = await axios.post("http://localhost:9000/api/bot/run");
      alert(response.data);
    } catch (error) {
      alert("An error occurred");
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

          {/* Sélection de la marque */}
          <select
            className="ChooseBrandsArticle"
            onChange={handleBrandChange} // Ajout du gestionnaire d'événements
            value={selectedBrand}
          >
            <option value="">Sélectionnez une marque</option>
            {selectedType &&
              brandsByType[selectedType].map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
          </select>

          {/* Sélection de la marque */}
          <select
            className="ChooseBrandsArticle"
            onChange={handleSizeChange} // Ajout du gestionnaire d'événements
            value={selectedSize}
          >
            <option value="">Sélectionnez une taille</option>
            {selectedType &&
              SizeByType[selectedType].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
          </select>

          {/* Sélection de la valeurs min */}
          <label>Valeur minimale:</label>
          <input
            type="text"
            placeholder="...€"
            value={inputValueMin}
            onChange={handleInputMinChange}
          />

          {/* Sélection de la valeurs max */}
          <label>Valeur maximal:</label>
          <input
            type="text"
            placeholder="...€"
            value={inputValueMax}
            onChange={handleInputMaxChange}
          />
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
