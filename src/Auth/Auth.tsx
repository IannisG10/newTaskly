import React from "react";
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import SignUp from "./SignUp";
const Auth: React.FC = ()=>{
    return(
        <div className="flex flex-col justify-center items-center border gap-2 border-gray-100 rounded-lg w-2/3 p-2 ">
            <h1 className="text-3xl italic font-josefin font-bold">Bienvenue dans Taskly</h1>
            <p className="font-sans text-sm text-gray-500">Inscrivez-vous ou connectez vous</p>
            <Tabs defaultValue="Inscription" className="w-3/4">
                <TabsList className="w-3/4">
                    <TabsTrigger value="Inscription" className="w-full">S'inscrire</TabsTrigger>
                    <TabsTrigger value="Connexion" className="w-full">Se Connecter</TabsTrigger>
                </TabsList>
                <TabsContent value="Inscription">
                    <SignUp/>

                </TabsContent>
                <TabsContent value="Connexion">
                    <Login/>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Auth