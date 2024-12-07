import React from "react";
import { useAppSelector,useAppDispatch } from "@/redux/hook";
import { toggleData } from "@/redux/reducer/CounterSlice";
import { Trash2,Clock } from "lucide-react";
import { Checkbox } from "../ui/checkbox";


const TaskList: React.FC = ()=> {

    const datas = useAppSelector((state) => state.data.data);
    const dispatch = useAppDispatch();

    // const handleData = (id: number) => {
    //     dispatch(toggleData(id));
        
    // }

    const toggleDatCheck = (id: number,checkValue: boolean)=>{
        dispatch(toggleData(id));
        const update = {
            isCheck: checkValue
        }
        fetch(`https://api-newtaskly.onrender.com/data/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => console.log("Data update succesfully",data))
        .catch(err => console.error("An error occured during the update",err))
    }

    
    

    return(
        <div className="flex flex-col gap-5 md:w-1/4 w-5/6 my-4">
            {datas.map((item,index) => (
                <div key={index}
                     className="flex flex-col border gap-1 border-gray-100  p-2 rounded-md shadow"
                >
                    <div className="flex justify-start gap-0.5 items-center font-josefin md:text-lg text-sm">
                        <Checkbox checked={item.isCheck}
                            onCheckedChange={()=>{
                                toggleDatCheck(item._id,item.isCheck)
                            }}
                        />
                        {
                            item.isCheck ? <div><s>{item.desc}</s></div> : <div>{item.desc}</div>
                        }  
                    </div>
                    <div className="flex justify-start font-josefin items-center bg-gray-400 rounded-lg p-1 text-xs w-fit font-bold">
                        {item.tags}
                    </div>
                    <div className="flex md:w-1/2 w-3/4 justify-center md:text-base text-sm items-center gap-1 ">
                        <div className="flex w-5/6 justify-center items-center gap-1 hover:bg-gray-300 hover:scale-95 ease-in-out transition-all duration-200 cursor-pointer
                             border-2 border-gray-200  bg-gray-100 rounded p-1 text-sm">
                            <span><Clock size={20}/></span>
                            <div className="font-semibold">{item.date}</div>
                        </div>
                        <div className="p-1 hover:bg-gray-200 rounded transition-all duration-200 ease-in-out cursor-pointer">
                            <Trash2 size={20}/>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default TaskList