import React from "react"
import { Plus } from "lucide-react";
import { Calendar } from "lucide-react";
import { Tabs,TabsList,TabsTrigger } from "../ui/tabs";

const InputField: React.FC = () =>{
    return (
        <div className="w-1/4 flex flex-col justify-center items-center gap-4">
            <input type="text" placeholder="Rechercher une tâche..." className="w-full font-josefin py-1 px-2 border-gray-300 border rounded-md outline-none focus:border-zinc-800" />
            <Tabs className="w-full" defaultValue="toutes">
                <TabsList className="w-full grid grid-cols-2 shadow-inner">
                    <TabsTrigger value="toutes">Toutes</TabsTrigger>
                    <TabsTrigger value="aujourdhui">Aujourd'hui</TabsTrigger>
                </TabsList>
            </Tabs>
            <input type="text" placeholder="Titre de la tâche" className="w-full font-josefin py-1 px-2 border-gray-200 border rounded-md outline-none focus:border-zinc-800" />
            <button className="flex font-josefin justify-center items-center font-semibold border-2 border-gray-200 bg-gray-100 rounded-md w-full py-1">
                <Calendar/>Date déchéance
                </button>
            <input type="text" placeholder="Tags(Séparés par des virgules)" className="w-full font-josefin py-1 px-2 border-gray-200 border rounded-md outline-none focus:border-zinc-800" />
            <button className="flex font-josefin justify-center items-center text-white font-medium border-none bg-zinc-950 w-full rounded-md py-1">
            <Plus/> Ajouter 
            </button>
        </div>
    )
}

export default InputField;