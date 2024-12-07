import React from "react";

const SideBar: React.FC = ()=>{
    return(
        <div className="flex flex-col justify-center bg-gray-200 absolute font-semibold font-josefin top-10 left-2 h-[370px] md:w-2/12 w-6/12 rounded-sm">
            <ul className="flex flex-col justify-around md:text-base text-sm h-1/2 mx-2 items-center">
                <li className="cursor-pointer">Toutes les tâches</li>
                <li className="cursor-pointer">Tâches terminées</li>
                <li className="cursor-pointer">Tâches supprimées</li>
            </ul>
        </div>
    )
}

export default SideBar;