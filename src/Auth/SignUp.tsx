import React from "react"

const SignUp: React.FC = ()=> {
    return(
        <div>
            <div>
                <label htmlFor="">Email</label>    
                <input type="text" placeholder="Entrer votre email" />
            </div>
            <div>
                <label htmlFor="">Mot de passe</label>
                <input type="password" placeholder="Choisir un mot de passe" />
            </div>
            <div>
                <label htmlFor="">Mot de passe</label>
                <input type="password" placeholder="Confirmer votre mot de passe" />
            </div>
            <div>
                <button>S'inscrire</button>
            </div>
        
        </div>
    )
}

export default SignUp