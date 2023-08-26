'use client'
import CardForm from "@/components/form/form";
import Input from "@/components/input/input";
import Navbar from "@/components/navBar/navBar";
import registerUser from "@/functions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

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
    const [erro,setErro] =useState('')
    const router = useRouter()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/g
    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            setErro('')
            const regex =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
            if(formData.passWord !== formData.confirmPassWord) throw new Error("As senhas não são iguais")
            if(!regex.test(formData.passWord)){
                throw new Error(`Sua senha deve ter letras maiuscula minusculas, numeros e caracteres especiais `)
            } 
            const user = await registerUser(formData)
            console.log(user)
            router.push(`login`)
        } catch (error: any) {
            setErro(error.message)
        }
    }
    return (
        <>
            <title>Cadastro</title>
            <div className="h-[100vh]">
                <Navbar />
                <form onSubmit={handleFormSubmit}>

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
                            {erro && <p className="text-primaryRubeus-red">{erro}</p>}
                            <button type="submit" className="bg-primaryRubeus-green px-10 py-1 rounded-lg text-white font-semibold">
                                Concluir
                            </button>
                            <Link href='/login' className="text-sm text-primaryRubeus-green">Já Possuo conta!</Link>
                        </CardForm>
                    </div>
                </form>
            </div>
        </>
    )
}