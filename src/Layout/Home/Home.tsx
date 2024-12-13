import React, { useState } from "react";
import InputField from "@/components/InputField/InputField";
import NavBar from "@/components/Menu/NavBar";
import SideBar from "@/components/Menu/SideBar";
import TaskList from "@/components/TaskList/TaskList";
import { useAppSelector } from "@/redux/hook";

const Home: React.FC = () =>{
    const [isOpen,setIsOpen] = useState<boolean>(false)

    const theme = useAppSelector((state)=> state.theme.theme)
    return(
        <div className={`flex flex-col p-10 justify-center items-center w-full rounded-md relative shadow-md border 
        ${theme ? "border-gray-200 bg-slate-800":"border-gray-50"}`}>
            <InputField/>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen &&
                <SideBar/> 
            }
            <TaskList/>
        </div>
    )
}

export default Home;