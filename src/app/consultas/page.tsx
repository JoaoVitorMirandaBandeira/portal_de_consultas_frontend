'use client'
import Input from "@/components/input/input";
import {ChangeEvent, useState} from "react";

interface FormDataInterface{
    input: string
}
const Consultas= ()=>{
    const [formData, setFormData] = useState<FormDataInterface>({
        input: ''
    })
    
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData((prevData) => ({
            ...prevData,
            input: value,
        }));
    }
    return(
        <>
            <h2>Ola mundo!</h2>
            <Input
            type="text"
            value={formData.input}
            name="input"
            onChange={handleInputChange}/>
        </>
    )
}

export default Consultas