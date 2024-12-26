import React from "react";
import { GalleryVerticalEnd,ListChecks,Trash,LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";

import Switch from "../Switch/switch";

const SideBar: React.FC = ()=>{

    const theme = useAppSelector((state) => state.theme.theme)

    return(
        <div className={`flex flex-col justify-center z-30 ${theme ? "bg-gray-600":"bg-gray-200"} absolute font-semibold font-josefin top-10 left-2 h-[370px] md:w-2/12 w-6/12 rounded-sm`}>
            <Switch/>
            <ul className="flex flex-col justify-around md:text-base text-sm h-1/2 mx-2 items-center">
                <li className="  w-full  
                      gap-1">
                      <NavLink to="/" 
                               className={({ isActive }) => (isActive ? `flex flex-row ${theme ? "bg-slate-500":"bg-slate-300"} p-1 rounded-sm justify-center ${theme ? "text-gray-100":"text-stone-800"} font-bold items-center` 
                               : `flex flex-row justify-center items-center p-1 transition-all duration-200 rounded-sm ${theme ? "hover:bg-slate-500 hover:text-white text-gray-100":"hover:bg-slate-300 hover:text-gray-900"}`)}> 
                        <GalleryVerticalEnd size={20}/> Toutes les tâches
                      </NavLink>
                </li>
                <li className=" w-full  gap-1">
                        <NavLink to="/done" 
                               className={({ isActive }) => (isActive ? `flex flex-row ${theme ?"bg-slate-500":"bg-slate-300"} p-1 rounded-sm justify-center ${theme ? "text-gray-100":"text-stone-800"} font-bold items-center` 
                               : `flex flex-row justify-center items-center p-1 transition-all duration-200 rounded-sm ${theme ? "hover:bg-slate-500 hover:text-white text-gray-100":"hover:bg-slate-300 hover:text-gray-900"}`)}> 
                             <ListChecks size={20}/> Tâches terminées
                        </NavLink>
                      
                </li>
                <li className={`cursor-pointer ${theme ? "hover:bg-slate-500 hover:text-white text-gray-100":"hover:bg-slate-300"} flex flex-row justify-center items-center w-full hover:text-gray-900 
                    p-1 rounded-sm transition-all duration-200 gap-1`}>
                        <NavLink to="/trash"
                                className={({ isActive }) => (isActive ? `flex flex-row ${theme ?"bg-slate-500":"bg-slate-300"} p-1 rounded-sm justify-center ${theme ? "text-gray-100":"text-stone-800"} font-bold items-center` 
                                : `flex flex-row justify-center items-center p-1 transition-all duration-200 rounded-sm ${theme ? "hover:bg-slate-500 hover:text-white text-gray-100":"hover:bg-slate-300 hover:text-gray-900"}`)}
                        >
                            <Trash size={20}/>Tâches supprimées

                        </NavLink>
                </li>
                <li className="hover:text-gray-900 p-1 transition-all duration-200 hover:bg-slate-300 cursor-pointer rounded-sm">
                    <LogOut size={20}/>
                </li>
            </ul>
            
        </div>
    )
}

export default SideBar;