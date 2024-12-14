import React from "react"

const SignUp: React.FC = ()=> {
    return(
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex flex-col justify-start w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Email</label>    
                <input type="text" placeholder="Entrer votre email" className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1" />
            </div>
            <div className="flex flex-col justify-start w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Mot de passe</label>
                <input type="password" placeholder="Choisir un mot de passe" className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1" />
            </div>
            <div className="flex flex-col justify-start w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Mot de passe</label>
                <input type="password" placeholder="Confirmer votre mot de passe" className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1" />
            </div>
            <div className="w-full">
                <button className="bg-gray-900 text-white font-medium w-3/4 rounded-md p-1">S'inscrire</button>
            </div>
        
        </div>
    )
}

export default SignUp