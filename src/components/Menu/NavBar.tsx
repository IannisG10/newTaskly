import React from "react";
import { Menu,X } from "lucide-react";
import { useAppSelector } from "@/redux/hook";

interface menuTypeProps {
    isOpen: boolean;
    setIsOpen: (b: boolean)=> void;
}


const NavBar: React.FC<menuTypeProps> = ({isOpen,setIsOpen})=>{

    const theme = useAppSelector((state) => state.theme.theme)

    const handleOpenMenu = ()=> {
        setIsOpen(!isOpen)
    }
    return(
        <div className={`absolute top-2 left-2 border cursor-pointer  rounded-sm p-0.5  ${theme ? "bg-gray-600":"bg-gray-100"}`}
             onClick={()=>{handleOpenMenu()}}
        >
            {isOpen ? <X size={23}
                        color={theme ? "white":"black"}
            /> : <Menu size={23}
            color={theme ? "white":"black"}
            />}
        </div>
    )
}

export default NavBar;