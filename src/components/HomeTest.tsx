import React, { useState } from "react";
import InputField from "./InputField/InputField";
import NavBar from "./Menu/NavBar";
import SideBar from "./Menu/SideBar";
const HomeTest: React.FC = ()=>{

    const [isOpen,setIsOpen] = useState<boolean>(false)
    return(
        <div className="flex flex-col p-10 justify-center items-center w-full rounded-md relative shadow-md border">
            <InputField/>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            {
                isOpen && <SideBar/>
            }
        </div>
    )
}


export default HomeTest;