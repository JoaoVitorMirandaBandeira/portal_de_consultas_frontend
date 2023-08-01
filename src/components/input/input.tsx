import React, { ChangeEvent } from "react"

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement>{
    value: string,
    type: string,
    label:string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({value,type,label,onChange,...props}:InputInterface){
    return(
        <div className="flex flex-col">
            <label>{label}</label>
            <input className="bg-gray-100 border border-gray-300 font-body rounded focus:outline-none focus:border-b-blue-400 focus:border-b-2 px-2 pt-2 pb-0 text-sm w-64"
                    value={value}
                    type={type} 
                    onChange={onChange}
                    {...props}/>
        </div>
    )
}