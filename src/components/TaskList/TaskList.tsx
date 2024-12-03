import React from "react";
import { useAppSelector } from "@/redux/hook";
import { Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

const TaskList: React.FC = ()=> {

    const datas = useAppSelector((state) => state.data.data)
    return(
        <div className="flex flex-col gap-5 w-1/4 my-4">
            {datas.map((item,index) => (
                <div key={index}
                     className="flex flex-col border gap-1 border-gray-100  p-2 rounded-md shadow"
                >
                    <div className="flex justify-start items-center">
                        <Checkbox/>
                        <div>{item.desc}</div>
                    </div>
                    <div className="flex justify-start items-center bg-gray-400 rounded-lg p-1 text-xs w-fit font-bold">
                        {item.tags}
                    </div>
                    <div className="flex w-1/2 justify-center items-center gap-1 ">
                        <div className="border-2 border-gray-200  bg-gray-100 rounded p-1 text-sm">
                            {item.date}
                        </div>
                        <div className="p-1 hover:bg-gray-200 rounded">
                            <Trash2 size={20}/>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default TaskList