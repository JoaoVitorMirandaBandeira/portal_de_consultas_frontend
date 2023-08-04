"use client";
import Input from "@/components/input/input";
import { ChangeEvent, useState } from "react";
import Navbar from "@/components/navBar/navBarr";
import CardForm from "@/components/form/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormDataInterface {
    email: string,
    password: string
}
const Login = () => {
    const [formData, setFormData] = useState<FormDataInterface>({
        email: '',
        password: ''
    })
    const router = useRouter()

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const redirectUser = async () => {
        const userID = '1234'
        router.push(`tbcs/${userID}`)
    }
    return (
        <>
            <title>Login</title>
            <div className="h-[100vh]">
                <Navbar />
                <div className="flex justify-center items-center h-[90vh] ">
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
                        <button onClick={redirectUser} className="bg-primaryRubeus-green px-10 py-1 rounded-lg text-white font-semibold">
                            Acessar
                        </button>
                        <Link href='/cadastro' className="text-sm text-primaryRubeus-green">Não tenho conta!</Link>
                    </CardForm>
                </div>
            </div>
        </>
    )
}

export default Login