import React, { useState } from "react";
import { useAppSelector,useAppDispatch } from "@/redux/hook";
import { toggleData } from "@/redux/reducer/CounterSlice";
import { Trash2,Clock } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Calendar } from "../ui/calendar";
import { fetchData } from "@/redux/reducer/CounterSlice";
import { updateData } from "@/redux/reducer/CounterSlice";


const TaskList: React.FC = ()=> {

    const datas = useAppSelector((state) => state.data.data);
    const dispatch = useAppDispatch();

    const theme = useAppSelector((state)=> state.theme.theme)
    
    const [showCalendar,setShowCalendar] = useState<boolean>(false);

    const handleVueCalendar = () => {
        setShowCalendar(!showCalendar)
    }

    const toggleDatCheck = (id: number,checkValue: boolean)=>{

        dispatch(updateData({id: id,data: checkValue}))
        // dispatch(toggleData(id))
    }

    const deleteData = (id: number)=> {
        
        dispatch(toggleData(id))
        fetch(`https://api-newtaskly.onrender.com/home/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log("Data delet succcesfully",data))
        .catch(err => console.log("Error",err))
        dispatch(fetchData())
    }


    return(
        <div className="flex flex-col gap-5 md:w-1/4 w-5/6 my-4">
            {datas.map((item) => (
                <div key={item._id}
                     className={`flex flex-col border gap-1 relative ${theme ? "border-gray-900 bg-slate-500":"border-gray-100"}  p-2 rounded-md shadow`}
                >
                    <div className="flex justify-start gap-0.5 items-center font-josefin md:text-lg text-sm">
                        <Checkbox checked={item.isCheck}
                            onCheckedChange={()=>{
                                toggleDatCheck(item._id,!item.isCheck)
                            }}
                            
                        />
                        {
                            item.isCheck ? <div className={`${theme ? "text-gray-100":""}`}><s>{item.desc}</s></div> : <div  className={`${theme ? "text-gray-100":""}`}>{item.desc}</div>
                        }  
                    </div>
                    <div className="flex flex-row gap-1">
                        {item.tags.map((t,index) => (
                            <div className={`${theme ? "bg-gray-700 text-gray-200 ":"bg-gray-500"} text-xs p-0.5 px-1 w-fit rounded-md font-bold font-josefin`} key={index}>
                                {t}
                            </div>
                        ))}
                    </div>
                    <div className="flex md:w-1/2 w-3/4 justify-center md:text-base text-sm items-center gap-1 ">
                        <div className={`flex w-5/6 justify-center items-center gap-1  hover:scale-95 ease-in-out transition-all duration-200 cursor-pointer
                             border-2 ${theme ? "border-gray-400 bg-gray-600 hover:bg-gray-700 text-gray-200 ":"border-gray-200 bg-gray-100 hover:bg-gray-300"}   rounded p-1 text-sm`}
                             onClick={handleVueCalendar}
                             >
                            <span><Clock size={20}/></span>
                            <div className="font-semibold">{item.date}</div>
                        </div>
                        {showCalendar &&  <Calendar 
                                className="absolute top-28 right-0 z-20 bg-gray-100 rounded-sm" />}
                        <div 
                            onClick={()=>{
                                deleteData(item._id)
                            }}
                            className={`p-1 ${theme ? "hover:bg-gray-600 text-gray-200":"hover:bg-gray-200"} rounded transition-all duration-200 ease-in-out 
                            cursor-pointer`}>

                            <Trash2 size={20}/>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default TaskList