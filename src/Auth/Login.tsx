import React from "react"

const Login: React.FC = ()=> {
    return(
        <div>
            <div>
                <label htmlFor=""></label>
                <input type="text" placeholder="Entrer votre email" />
            </div>
            <div>
                <label htmlFor="">Mot de passe</label>
                <input type="text" placeholder="Entrer votre mot de passe" />
            </div>

            <div>
                <button>Se connecter</button>
            </div>
        </div>
    )
}

export default Login