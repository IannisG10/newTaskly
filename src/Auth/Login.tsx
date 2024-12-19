import React from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginForm{
    email: string;
    password: string;
}

const Login: React.FC = ()=> {

    const navigate = useNavigate();

    const { register,handleSubmit,resetField } = useForm<LoginForm>()

    //Callback function to submit form 
    const onSubmit: SubmitHandler<LoginForm> = (data)=>{
        fetch("https://api-newtaskly.onrender.com/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((d) => {
            if (d.message === "Success"){
                navigate("/")
            }
        }
                
        )
        .catch(err => console.error("Wrond send data",err))

        resetField("email")
        resetField("password")
    }
    return(
        <form className="flex flex-col justify-center items-center w-full gap-2"
                onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col  w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Email</label>
                <input type="text" 
                        placeholder="Entrer votre email" 
                        className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1"
                        {...register("email")}
                        />
            </div>
            <div className="flex flex-col  w-3/4">
                <label htmlFor="" className="flex justify-start text-sm font-semibold">Mot de passe</label>
                <input type="password" 
                        placeholder="Entrer votre mot de passe" 
                        className="border border-gray-200 outline-none focus:border-zinc-950 rounded-md p-1"
                        {...register("password")}
                        />
            </div>

            <div className="w-full">
                <button type="submit"  className="bg-gray-900 text-white font-medium w-3/4 rounded-md p-1">Se connecter</button>
            </div>
        </form>
    )
}

export default Login