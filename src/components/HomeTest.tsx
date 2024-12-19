import React, { useEffect, useState } from "react";
import InputField from "./InputField/InputField";
import TaskList from "./TaskList/TaskList";
import NavBar from "./Menu/NavBar";
import SideBar from "./Menu/SideBar";
import { useAppDispatch } from "@/redux/hook";
import { fetchData } from "@/redux/reducer/DataReducer";

const HomeTest: React.FC = ()=>{

    const [isOpen,setIsOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchData())
    })
    return(
        <div className="flex flex-col p-10 justify-center items-center w-full rounded-md relative shadow-md border">
            <InputField/>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            {
                isOpen && <SideBar/>
            }
            <TaskList/>
        </div>
    )
}


export default HomeTest;