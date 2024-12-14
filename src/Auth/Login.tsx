import React from "react"

const Login: React.FC = ()=> {
    return(
        <div className="flex flex-col justify-center items-center w-3/4">
            <div className="flex flex-col justify-start">
                <label htmlFor=""></label>
                <input type="text" placeholder="Entrer votre email" />
            </div>
            <div className="flex flex-col justify-start">
                <label htmlFor="">Mot de passe</label>
                <input type="text" placeholder="Entrer votre mot de passe" />
            </div>

            <div className="w-full">
                <button>Se connecter</button>
            </div>
        </div>
    )
}

export default Login