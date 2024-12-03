import React from "react";

const SideBar: React.FC = ()=>{
    return(
        <div className="flex flex-col justify-center bg-gray-200 absolute font-semibold font-josefin top-10 left-2 h-[370px] w-2/12 rounded-sm">
            <ul className="flex flex-col justify-around h-1/2 items-center">
                <li className="cursor-pointer">Toutes les tâches</li>
                <li className="cursor-pointer">Tâches terminées</li>
                <li className="cursor-pointer">Tâches supprimées</li>
            </ul>
        </div>
    )
}

export default SideBar;