import { TextField, TextFieldPropsColorOverrides } from "@mui/material"
import React, { ChangeEvent } from "react"

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string,
    type: string,
    label: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ value, type, label, onChange }: InputInterface) {
    return (
        <div className="flex flex-col">
            <TextField
                id="filled-basic"
                label={label}
                variant="filled"
                value={value}
                type={type}
                onChange={onChange}
            />
        </div>
    )
}