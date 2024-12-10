import React from "react";
import { useAppSelector } from "@/redux/hook";

const Done: React.FC = ()=> {
    const datas = useAppSelector((state) => state.data.data)
    const Donedata = datas.filter(item => item.isCheck)
    
    return(
        <>
        
        </>
    )
}

export default Done