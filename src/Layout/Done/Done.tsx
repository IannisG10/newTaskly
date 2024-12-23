import React, { useState } from 'react'
import DoneList from '@/components/DoneList/DoneList'
import NavBar from '@/components/Menu/NavBar'
import SideBar from '@/components/Menu/SideBar'
import { useAppSelector } from '@/redux/hook'

const Done: React.FC = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)

    const theme = useAppSelector(theme => theme.theme.theme)
    return(
        <div className={`flex flex-col p-10 justify-center items-center w-full rounded-md relative shadow-md border 
        ${theme ? "border-gray-200 bg-slate-800": "border-gray-50"}`}>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && 
                <SideBar/>
            }
            <DoneList/>        
        </div>
    )
}

export default Done