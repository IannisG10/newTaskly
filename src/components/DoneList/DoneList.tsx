import React from "react";
import { useAppSelector } from "@/redux/hook";
import { Checkbox } from "../ui/checkbox";

const DoneList: React.FC = ()=> {
    const datas = useAppSelector((state) => state.data.data)
    const Donedata = datas.filter(item => item.isCheck)

    return(
        <div className="flex flex-col gap-5 md:w-1/4 w-5/6 my-4">
            {Donedata.map((item) => (
                <div key={item._id}
                     className="flex flex-col border gap-1 relative border-gray-100  p-2 rounded-md shadow"
                >
                    <div className="flex justify-start gap-0.5 items-center font-josefin md:text-lg text-sm">
                        <Checkbox checked={item.isCheck}/>
                        {item.isCheck ? <div><s>{item.desc}</s></div> : <div>{item.desc}</div>}
                    </div>


                </div>
            ))}
        
        </div>
    )
}

export default DoneList