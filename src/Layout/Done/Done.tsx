import React, { useState } from 'react'
import DoneList from '@/components/DoneList/DoneList'
import NavBar from '@/components/Menu/NavBar'
import SideBar from '@/components/Menu/SideBar'

const Done: React.FC = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    return(
        <div className='flex flex-col p-10 justify-center items-center w-full rounded-md relative shadow-md border 
        border-gray-50'>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && 
                <SideBar/>
            }
            <DoneList/>        
        </div>
    )
}

export default Done