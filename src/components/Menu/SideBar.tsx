import React from "react";
import { GalleryVerticalEnd,ListChecks,Trash } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = ()=>{
    return(
        <div className="flex flex-col justify-center z-30 bg-gray-200 absolute font-semibold font-josefin top-10 left-2 h-[370px] md:w-2/12 w-6/12 rounded-sm">
            <ul className="flex flex-col justify-around md:text-base text-sm h-1/2 mx-2 items-center">
                <li className="  w-full  
                      gap-1">
                      <NavLink to="/" 
                               className={({ isActive }) => (isActive ? "flex flex-row bg-slate-300 p-1 rounded-sm justify-center text-stone-800 font-bold items-center" 
                               : "flex flex-row justify-center items-center p-1 transition-all duration-200 rounded-sm hover:bg-slate-300 hover:text-gray-900")}> 
                        <GalleryVerticalEnd size={20}/> Toutes les tâches
                      </NavLink>
                </li>
                <li className="cursor-pointer hover:bg-slate-300 flex flex-row justify-center items-center w-full hover:text-gray-900 
                    p-1 rounded-sm transition-all duration-200 gap-1">
                       <ListChecks size={20}/> Tâches terminées
                </li>
                <li className="cursor-pointer hover:bg-slate-300 flex flex-row justify-center items-center w-full hover:text-gray-900 
                    p-1 rounded-sm transition-all duration-200 gap-1">
                        <Trash size={20}/>Tâches supprimées
                </li>
            </ul>
        </div>
    )
}

export default SideBar;