import React, { useEffect, useState } from "react"
import { Plus,Search } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Tabs,TabsList,TabsTrigger } from "../ui/tabs";
import { useAppDispatch,useAppSelector } from "@/redux/hook";
import { setData } from "@/redux/reducer/CounterSlice";
import { Calendar } from "../ui/calendar";

// interface datatype {
//     _id: number;
//     desc: string;
//     tags: string;
// }

const InputField: React.FC = () =>{

    //const input = useAppSelector((state) => state.input.description)
    //const tag = useAppSelector((state) => state.input.tag)
    //const dispatch = useAppDispatch()

    const [description,setDescription] = useState<string>("")
    const [tag,setTag] = useState<string>("")
    const [showCalendar,setShowCalendar] = useState<boolean>(false)
    const [date,setDate] = useState<Date | undefined>(new Date())
    // const [dataTest,setDataTest] = useState<datatype[]>([])

    const datas = useAppSelector((state) => state.data.data)
    const dispatch = useAppDispatch()

    
    const handleDescription = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDescription(e.target.value)
    }

    const handleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTag(e.target.value)
    }

    const handleShowCalendar = ()=> {
        setShowCalendar(!showCalendar)
    }

    const handleChangeDate=(dat:Date | undefined)=>{
        if(dat){
            setDate(dat)
        }
    }

    const fetchData = ()=>{
        const newTask = {
            _id: Date.now(),
            desc: description,
            tags: tag
        }
        fetch("https://newtaskly.onrender.com/task",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(res => res.json())
        .then(data => console.log("Data from the client : ",data))
        .catch((err)=>{
            console.error("Probleme d'envoie de données venant du client",err)
        })
        setDescription("")
        setTag("")
    }

    useEffect(()=>{
        fetch("https://newtaskly.onrender.com/task")
        .then(res => res.json())
        .then((data) => {
            console.log("Données reçu de l'API : ",data)
            //setDataTest(data)
            dispatch(setData(data))
            console.log(datas)
            //console.log(dataTest)
        }).catch((err) => {
            console.error("Erreur de reçeption des données depuis la BD",err)
        })
    },[dispatch])
 
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
                   value={description}
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
                    onClick={fetchData}
            >
                <Plus/> Ajouter 
            </button>
             
           {datas.map((item,index) => (
            <p key={index}>{item.desc}</p>
           ))}
        </div>
    )
}

export default InputField;