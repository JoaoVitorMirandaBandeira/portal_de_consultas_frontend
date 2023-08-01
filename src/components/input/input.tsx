import React, { ChangeEvent } from "react"

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement>{
    value: string,
    type: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({value,type,onChange,...props}:InputInterface){
    return(
        <input className="bg-gray-100 border border-gray-300 font-body rounded focus:outline-none focus:border-b-blue-400 focus:border-b-2 px-2 pt-2 pb-0 text-lg fon"
                value={value}
                type={type} 
                onChange={onChange}
                {...props}/>
    )
}