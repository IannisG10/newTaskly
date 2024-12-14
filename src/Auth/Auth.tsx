import React from "react";
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import SignUp from "./SignUp";
const Auth: React.FC = ()=>{
    return(
        <div className="flex flex-col justify-center items-center border border-gray-100 rounded-lg w-2/3 p-2 ">
            <h1 className="text-3xl italic font-josefin font-bold">Bienvenue dans Taskly</h1>
            <p className="font-sans text-sm text-gray-500">Inscrivez-vous ou connectez vous</p>
            <Tabs defaultValue="Inscription" className="w-3/4">
                <TabsList>
                    <TabsTrigger value="Inscription">S'inscrire</TabsTrigger>
                    <TabsTrigger value="Connexion">Se Connecter</TabsTrigger>
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