import React, { useState } from "react"
import { Plus,Search } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Tabs,TabsList,TabsTrigger } from "../ui/tabs";
import { useAppDispatch,useAppSelector } from "@/redux/hook";
import { setInput,setTag } from "@/redux/reducer/CounterSlice";
import { Calendar } from "../ui/calendar";

const InputField: React.FC = () =>{

    const input = useAppSelector((state) => state.input.description)
    const tag = useAppSelector((state) => state.input.tag)
    const dispatch = useAppDispatch()

    const [showCalendar,setShowCalendar] = useState<boolean>(false)
    const [date,setDate] = useState<Date | undefined>(new Date())


    const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInput(e.target.value))
    }

    const handleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTag(e.target.value))
    }

    const handleShowCalendar = ()=> {
        setShowCalendar(!showCalendar)
    }

    const handleChangeDate=(dat:Date | undefined)=>{
        if(dat){
            setDate(dat)
        }
    }

    return (
        <div className="w-1/4 flex flex-col justify-center items-center gap-3 relative">
            <div className="w-full relative">
                <input type="text" placeholder="Rechercher une tâche..." className="w-full  font-josefin py-1 px-2 border-gray-300 border rounded-md outline-none focus:border-zinc-800" />
                <Search className="absolute right-1 top-1 cursor-pointer hover:scale-95 transition-all duration-150"/>
            </div>
            <Tabs className="w-full" defaultValue="toutes">
                <TabsList className="w-full grid grid-cols-2 shadow-inner">
                    <TabsTrigger value="toutes">Toutes</TabsTrigger>
                    <TabsTrigger value="aujourdhui">Aujourd'hui</TabsTrigger>
                </TabsList>
            </Tabs>
            <input type="text" 
                   placeholder="Titre de la tâche" 
                   className="w-full font-josefin py-1 px-2 border-gray-200 border rounded-md 
                   outline-none focus:border-zinc-800" 
                   value={input}
                   onChange={handleDescription}
                   />
            <button className="flex font-josefin justify-center items-center font-semibold border-2 border-gray-200 
                            bg-gray-100 hover:bg-gray-300 transition-all duration-200 ease-in-out rounded-md w-full py-1"
                    onClick={()=>{handleShowCalendar()}}        
            >
                <CalendarDays/>Date déchéances
            </button>
            {showCalendar && 
            <Calendar mode="single" 
                      className="absolute top-48 bg-gray-100 rounded"
                      selected={date}
                      onSelect={handleChangeDate}
                      />}
            <input type="text" 
                   placeholder="Tags(Séparés par des virgules)" 
                   className="w-full font-josefin py-1 px-2 border-gray-200 border rounded-md 
                   outline-none focus:border-zinc-800" 
                   value={tag}
                   onChange={handleTag}
                   />
            <button className="flex font-josefin justify-center items-center text-white font-medium 
                    border-none bg-zinc-950 w-full rounded-md py-1"  
            >
                <Plus/> Ajouter 
            </button>
            <span>Description:{input}</span>
            <span>Tag:{tag}</span>
            
        </div>
    )
}

export default InputField;