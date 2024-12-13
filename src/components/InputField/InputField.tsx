import React, { useState } from "react"
import { Plus,Search } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Tabs,TabsList,TabsTrigger } from "../ui/tabs";
import { useAppDispatch} from "@/redux/hook";
//import { setData } from "@/redux/reducer/CounterSlice";
import { Calendar } from "../ui/calendar";
import { saveData } from "@/redux/reducer/CounterSlice";
import { fetchData } from "@/redux/reducer/CounterSlice";
import { useAppSelector } from "@/redux/hook";


const InputField: React.FC = () =>{

    const [description,setDescription] = useState<string>("")
    const [tag,setTag] = useState<string>("")
    const [showCalendar,setShowCalendar] = useState<boolean>(false)
    const [date,setDate] = useState<Date | undefined>(new Date())

    const dispatch = useAppDispatch();

    const theme = useAppSelector((state) => state.theme.theme)

    
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
    //Create data

    const fetchDatas = ()=>{
        const newTask = {
            _id: Date.now(),
            desc: description,
            tags: tag.split(","),
            date: date?.toLocaleDateString(),
            isCheck: false
        }
        // fetch("https://api-newtaskly.onrender.com/data",{
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newTask)
        // }).then(res => res.json())
        // .then(data => console.log("Data from the client : ",data))
        // .catch((err)=>{
        //     console.error("Probleme d'envoie de données venant du client",err)
        // })
        dispatch(saveData(newTask))
        dispatch(fetchData())
        setDescription("")
        setTag("")
    }

    
    // Read data
    // useEffect(()=>{
    //     fetch("https://api-newtaskly.onrender.com/data")
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log("Données reçu de l'API : ",data)
    //         dispatch(setData(data))
           
          
    //     }).catch((err) => {
    //         console.error("Erreur de reçeption des données depuis la BD",err)
    //     })
    // },[])
 
    return (
        <div className="md:w-1/4 w-5/6 flex flex-col justify-center items-center gap-3 relative">
            <div className="w-full relative">
                <input type="text" placeholder="Rechercher une tâche..." className={`w-full md:text-base text-sm  font-josefin py-1 px-2 ${theme ? "border-gray-600 focus:border-zinc-300 bg-slate-400 placeholder-gray-600 text-gray-800":"border-gray-300 focus:border-zinc-800"} border rounded-md outline-none `} />
                <Search className={`absolute right-1 top-1 cursor-pointer hover:scale-95 transition-all duration-150 ${theme ? "text-gray-100":"text-white"}`}/>
            </div>
            <Tabs className="w-full" defaultValue="toutes">
                <TabsList className={`w-full grid grid-cols-2 shadow-inner h-8 ${theme ? "bg-slate-400 text-gray-700":""}`}>
                    <TabsTrigger value="toutes" className="h-6">Toutes</TabsTrigger>
                    <TabsTrigger value="aujourdhui" className="h-6">Aujourd'hui</TabsTrigger>
                </TabsList>
            </Tabs>
            <input type="text" 
                   placeholder="Titre de la tâche" 
                   className={`w-full font-josefin py-1 px-2 md:text-base text-sm ${theme ? "border-gray-600 focus:border-zinc-300 bg-slate-400 placeholder-gray-600 text-gray-800":"border-gray-200 focus:border-zinc-800"} border rounded-md 
                   outline-none `} 
                   value={description}
                   onChange={handleDescription}
                   />
            <button className="flex font-josefin justify-center md:text-base text-sm items-center font-semibold border-2 border-gray-200 
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
                   className={`w-full font-josefin py-1 px-2 md:text-base text-sm ${theme ? "border-gray-600 focus:border-zinc-300 bg-slate-400 placeholder-gray-600 text-gray-800":"border-gray-200"} border rounded-md 
                   outline-none focus:border-zinc-800`} 
                   value={tag}
                   onChange={handleTag}
                   />
            <button className="flex font-josefin justify-center items-center text-white font-medium 
                    border-none bg-zinc-950 w-full rounded-md py-1"  
                    onClick={fetchDatas}
            >
                <Plus/> Ajouter 
            </button>
             
        </div>
    )
}

export default InputField;