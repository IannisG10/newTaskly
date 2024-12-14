import React from "react"

const SignUp: React.FC = ()=> {
    return(
        <div className="flex flex-col justify-center items-center w-3/4">
            <div className="flex flex-col justify-start">
                <label htmlFor="" className="text-sm font-semibold">Email</label>    
                <input type="text" placeholder="Entrer votre email" className="border border-gray-200" />
            </div>
            <div className="flex flex-col justify-start">
                <label htmlFor="" className="text-sm font-semibold">Mot de passe</label>
                <input type="password" placeholder="Choisir un mot de passe" className="border border-gray-200" />
            </div>
            <div className="flex flex-col justify-start">
                <label htmlFor="" className="text-sm font-semibold">Mot de passe</label>
                <input type="password" placeholder="Confirmer votre mot de passe" className="border border-gray-200" />
            </div>
            <div className="w-full">
                <button>S'inscrire</button>
            </div>
        
        </div>
    )
}

export default SignUp