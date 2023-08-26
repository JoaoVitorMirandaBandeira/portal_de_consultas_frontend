"use client";
import Input from "@/components/input/input";
import { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "@/components/navBar/navBar";
import CardForm from "@/components/form/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import loginUser from "@/functions/loginUser";
import Cookies from "js-cookie";

interface FormDataInterface {
    email: string,
    password: string
}
const Login = () => {
    const [formData, setFormData] = useState<FormDataInterface>({
        email: '',
        password: ''
    })
    const [erro,setErro] = useState('')
    const router = useRouter()

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            setErro('')
            console.log(formData)
            const user = await loginUser(formData)
            console.log(user)
            Cookies.set('Atentication',user.token)
            router.push(`tbcs/${user.user.id}`)
        } catch (error:any) {
            setErro(error.message)
        }
    }

    /*const redirectUser = async () => {
        const userID = '1234'
        router.push(`tbcs/${userID}`)
    }*/
    return (
        <>
            <title>Login</title>
            <div className="h-[100vh]">
                <Navbar />
                <div className="flex justify-center items-center h-[90vh] ">
                    <form onSubmit={handleFormSubmit}>
                        <CardForm title="Login">
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
                                value={formData.password}
                                name="password"
                                required
                                onChange={handleInputChange} />
                            {erro && <p className="text-primaryRubeus-red">{erro}</p>}
                            <button type="submit" className="bg-primaryRubeus-green px-10 py-1 rounded-lg text-white font-semibold">
                                Acessar
                            </button>
                            <Link href='/cadastro' className="text-sm text-primaryRubeus-green">Não tenho conta!</Link>
                        </CardForm>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login