import React from "react";
import '../Assets/Style/Register.css'

function Register(){
 return(
    <div className='container'>
        <form className='register-form'>
        <h2>Inscription</h2>
        <label>
          Mail:
        </label>
        <input type='email' className='input' />
        <br/>
        <label>
          Mot de passe:
        </label>
        <input type='password' className='input' />
        <br/>
        <label>
          Nom: 
        </label>
        <input type='nom' className='input'/>
        <br/>
        <label>
          Prénom: 
        </label>
        <input type='prénom' className='input'/>
        <br/>
        <button type='submit' className="Btn-register">
          S'inscrire
        </button>
      </form>
    </div>
 );
}
export default Register;