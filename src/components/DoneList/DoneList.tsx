import React from "react";
import {  useAppSelector } from "@/redux/hook";
import { Checkbox } from "../ui/checkbox";
import { Clock,Trash2 } from "lucide-react";


const DoneList: React.FC = ()=> {
    const datas = useAppSelector((state) => state.data.data)
   
    const Donedata = datas.filter(item => item.isCheck)
    const theme = useAppSelector(theme => theme.theme.theme)

    return(
        <div className="flex flex-col gap-5 md:w-1/4 w-5/6 my-4">

            <h1 className={`text-3xl italic font-bold ${theme && "text-gray-100"}`}>Tâches Terminées</h1>
            
            {Donedata.map((item) => (
                <div key={item._id}
                     className={`flex flex-col border gap-1 relative ${theme ? "border-gray-900 bg-slate-500":"border-gray-100"}  p-2 rounded-md shadow`}
                >
                    <div className="flex justify-start gap-0.5 items-center font-josefin md:text-lg text-sm">
                        <Checkbox checked={item.isCheck}/>
                        {item.isCheck ? <div className={`${theme && "text-gray-100"}`}><s>{item.desc}</s></div> : <div>{item.desc}</div>}
                    </div>
                    <div className="flex flex-row gap-1">
                        {item.tags.map((t,index) => (
                            <div key={index}
                                className={`${theme ? "bg-gray-700 text-gray-200":"bg-gray-500"} text-xs p-0.5 px-1 w-fit rounded-md font-bold font-josefin`}
                            >
                                {t}

                            </div>
                        ))}
                    </div>
                    <div className="flex md:w-1/2 w-3/4 justify-center md:text-base text-sm items-center gap-1 ">
                        <div className={`flex w-5/6 justify-center items-center gap-1  hover:scale-95 ease-in-out transition-all duration-200 cursor-pointer
                             border-2 ${theme ? "border-gray-400 bg-gray-600 hover:bg-gray-700 text-gray-200 ":"border-gray-200  bg-gray-100 hover:bg-gray-300"} rounded p-1 text-sm`}>
                            <span><Clock size={20}/></span>
                            <div className="font-semibold">{item.date}</div>
                        </div>
                        <div className={`p-1 ${theme ? "hover:bg-gray-600 text-gray-200":"hover:bg-gray-200"} rounded transition-all duration-200 ease-in-out 
                                cursor-pointer`}>
                            <Trash2 size={20}/>
                        </div>
                    </div>


                </div>
            ))}
        
        </div>
    )
}

export default DoneList