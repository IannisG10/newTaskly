import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";


interface SignupForm {
    email: string;
    passWord: string;
    confirmPassWord: string;
}

const SignUp: React.FC = ()=> {

    const { register,resetField,handleSubmit,watch,formState: {errors} } = useForm<SignupForm>({
        defaultValues:{
            email: "",
            passWord: ""
        }
    })

    const watchPassword = watch("passWord")

    const onSubmit: SubmitHandler<SignupForm> = (data) => {
        fetch("https://mytaskly.onrender.com/signup",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then((d)=>{
            alert(d.message)
        } 
        )
        .catch((err => console.error(err)))

        resetField("email")
        resetField("passWord")
        resetField("confirmPassWord")
    }

    return(
        <form className="flex flex-col justify-center items-center w-full gap-2"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col justify-start w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Email</label>    
                <input type="text" 
                        placeholder="Entrer votre email" 
                        className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1"
                        {...register("email",{required: "L'email est necessaire",pattern: {
                            value: /^[A-Za-z0-9._-]+@[A-Za-z0-9_-]+\.[A-Za-z{2,}$]/,
                            message: "Veuillez entrer un email valide"
                        }})}
                />
                {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
            </div>
            <div className="flex flex-col justify-start w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Mot de passe</label>
                <input type="password" 
                        placeholder="Choisir un mot de passe" 
                        className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1"
                        {...register("passWord",{required: true,minLength:{
                            value: 8,
                            message: "Le mot de passe doit contenir au moins 8 caractere"
                        }})}        
                />
               {errors.passWord && <span className="text-xs text-red-500 ">{errors.passWord.message}</span>}
            </div>
            <div className="flex flex-col justify-start w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Mot de passe</label>
                <input type="password" 
                      placeholder="Confirmer votre mot de passe" 
                      className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1"
                        {...register("confirmPassWord",{required: "La confirmation du mot de passe est nécessaire",validate : value => value === watchPassword || "Le mot de passe ne correspond pas"})}  
                    />
                
            </div>
            {errors.confirmPassWord?.message && <span className="text-xs text-red-500">{errors.confirmPassWord.message}</span>}
            <div className="w-full">
                <button type="submit" className="bg-gray-900 text-white font-medium w-3/4 rounded-md p-1">S'inscrire</button>
            </div>
        
        </form>
    )
}

export default SignUp