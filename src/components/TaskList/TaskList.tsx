import React from "react";
import { useAppSelector } from "@/redux/hook";

const TaskList: React.FC = ()=> {

    const datas = useAppSelector((state) => state.data.data)
    return(
        <div className="w-1/4 my-4">
            {datas.map((item,index) => (
                <div key={index}
                     className="flex flex-col rounded-md shadow"
                >
                    {item.desc}
                    {item.tags}

                </div>
            ))}

        </div>
    )
}

export default TaskList