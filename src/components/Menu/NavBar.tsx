import React from "react";
import { Menu,X } from "lucide-react";

interface menuTypeProps {
    isOpen: boolean;
    setIsOpen: (b: boolean)=> void;
}


const NavBar: React.FC<menuTypeProps> = ({isOpen,setIsOpen})=>{

    const handleOpenMenu = ()=> {
        setIsOpen(!isOpen)
    }
    return(
        <div className=" absolute top-2 left-2 border cursor-pointer  rounded-sm p-0.5  bg-gray-100"
             onClick={()=>{handleOpenMenu()}}
        >
            {isOpen ? <X size={23}/> : <Menu size={23}/>}
        </div>
    )
}

export default NavBar;