import React from "react";
import "../Assets/Style/Login.css";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/register'); // Redirige vers la page "About"
  };
  return (
    <div className="container-login">
      <form className="login-form">
        <h2>Connexion</h2>
        <label>Mail:</label>
        <input type="email" className="input" />
        <br />
        <label>Mot de passe:</label>
        <input type="password" className="input" />
        <br />
        <button className="Btn" type="submit">Connexion</button>
        <p>
          Vous n'avez pas de compte, pas d'inquiétude cliquer ici pour le créer
        </p>
        <button onClick={handleRedirect} className="Btn">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
