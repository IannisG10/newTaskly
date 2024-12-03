import React, { useState } from "react";
import InputField from "@/components/InputField/InputField";
import NavBar from "@/components/Menu/NavBar";
import SideBar from "@/components/Menu/SideBar";
import TaskList from "@/components/TaskList/TaskList";


const Home: React.FC = () =>{
    const [isOpen,setIsOpen] = useState<boolean>(false)
    return(
        <div className="flex flex-col p-10 justify-center items-center w-full rounded-md relative shadow-md border 
            border-gray-50">
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