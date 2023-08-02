'use client'
import CardForm from "@/components/form/form";
import Input from "@/components/input/input";
import Navbar from "@/components/navBar/navBarr";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

interface FormDataInterface {
    name: string,
    email: string,
    passWord: string,
    confirmPassWord: string
}

export default function Cadastro() {
    const [formData, setFormData] = useState<FormDataInterface>({
        name: "",
        email: "",
        passWord: "",
        confirmPassWord: ""
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    return (
        <>
            <title>Cadastro</title>
            <div className="h-[100vh]">
                <Navbar />
                <div className="flex justify-center items-center h-[90vh] ">
                    <CardForm title="Cadastro">
                        <Input
                            label="Nome:"
                            type="text"
                            value={formData.name}
                            name="name"
                            required
                            onChange={handleInputChange} />
                        <Input
                            label="E-mail:"
                            type="text"
                            value={formData.email}
                            name="email"
                            required
                            onChange={handleInputChange} />
                        <Input
                            label="Senha:"
                            type="password"
                            value={formData.passWord}
                            name="passWord"
                            minLength={8}
                            required
                            onChange={handleInputChange} />
                        <Input
                            label="Confirme sua senha:"
                            type="password"
                            value={formData.confirmPassWord}
                            name="confirmPassWord"
                            minLength={8}
                            required
                            onChange={handleInputChange} />
                        <button className="bg-primaryRubeus-green px-10 py-1 rounded-lg text-white font-semibold">
                            Concluir
                        </button>
                        <Link href='/login' className="text-sm text-primaryRubeus-green">Já Possuo conta!</Link>
                    </CardForm>
                </div>
            </div>
        </>
    )
}