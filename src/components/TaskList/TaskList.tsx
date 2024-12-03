import React from "react";
import { useAppSelector } from "@/redux/hook";

const TaskList: React.FC = ()=> {

    const datas = useAppSelector((state) => state.data.data)
    return(
        <div className="flex flex-col gap-5 w-1/4 my-4">
            {datas.map((item,index) => (
                <div key={index}
                     className="flex flex-col border border-gray-100  p-4 rounded-md shadow"
                >
                    <div>
                        {item.desc}
                    </div>
                    <div>
                        {item.tags}
                    </div>
                    <div className=" border-2 border-gray-200 rounded bg-gray-100">
                        {item.date}
                    </div>

                </div>
            ))}

        </div>
    )
}

export default TaskList