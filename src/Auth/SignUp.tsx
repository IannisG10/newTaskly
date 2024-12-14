import React from "react"
import { SubmitHandler, useForm } from "react-hook-form";

interface SignupForm {
    email: string;
    passWord: string;
    confirmPassWord: string;
}

const SignUp: React.FC = ()=> {

    const { register,handleSubmit,formState: {errors} } = useForm<SignupForm>()

    const onSubmit: SubmitHandler<SignupForm> = (data) => console.log(data)
    return(
        <form className="flex flex-col justify-center items-center w-full gap-2"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col justify-start w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Email</label>    
                <input type="text" 
                        placeholder="Entrer votre email" 
                        className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1"
                        {...register("email",{required: true})}
                />
                {errors.email && <span className="text-xs text-red-500">Ce champ est obligatoire. <b>Ajouter une adresse email</b></span>}
            </div>
            <div className="flex flex-col justify-start w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Mot de passe</label>
                <input type="password" 
                        placeholder="Choisir un mot de passe" 
                        className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1"
                        {...register("passWord",{required: true})}        
                />
                {errors.passWord && <span className="text-xs text-red-500">Ce champ est obligatoire. <b>Mot de passe obligatoire</b></span>}
            </div>
            <div className="flex flex-col justify-start w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Mot de passe</label>
                <input type="password" 
                      placeholder="Confirmer votre mot de passe" 
                      className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1"
                        {...register("confirmPassWord",{required: true})}  
                    />
                {errors.confirmPassWord && <span className="text-xs text-red-500">Ce champ est obligatoire. <b>Vous devez confirmer votre mot de passe</b></span>}
            </div>
            <div className="w-full">
                <button type="submit" className="bg-gray-900 text-white font-medium w-3/4 rounded-md p-1">S'inscrire</button>
            </div>
        
        </form>
    )
}

export default SignUp