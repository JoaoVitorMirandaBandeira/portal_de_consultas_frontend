"use client";
import Input from "@/components/input/input";
import { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "@/components/navBar/navBar";
import CardForm from "@/components/form/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import loginUser from "@/functions/loginUser";
import Cookies from "js-cookie";
import Loading from "@/components/loading/loading";
import { Button, TextField } from "@mui/material";

interface FormDataInterface {
    email: string,
    password: string
}
const Login = () => {
    const [formData, setFormData] = useState<FormDataInterface>({
        email: '',
        password: ''
    })
    const [erro, setErro] = useState('')
    const [loading, setLoading] = useState<boolean>(false)
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
            setLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1500));
            setErro('')
            console.log(formData)
            const user = await loginUser(formData)
            Cookies.set('Atentication', user.token)
            router.push(`tbcs/${user.user.id}`)
        } catch (error: any) {
            setLoading(false)
            setErro(error.message)
        }
    }

    /*const redirectUser = async () => {
        const userID = '1234'
        router.push(`tbcs/${userID}`)
    }*/
    const pinkColor = 'pink';
    return (
        
        <>
            <title>Login</title>
            <div className="h-[100vh]">
                {loading && <Loading />}
                <Navbar />
                <div className="flex justify-center items-center h-[90vh] ">
                    <form onSubmit={handleFormSubmit}>
                        <CardForm title="Login">
                            <TextField
                                id="email"
                                label="E-mail:"
                                variant="filled"
                                value={formData.email}
                                type="email"
                                name="email"
                                onChange={handleInputChange} 
                                helperText={erro}
                                error={(erro?true:false)}
                            />
                            <TextField
                                id="senha"
                                label="Senha:"
                                variant="filled"
                                value={formData.password}
                                type="password"
                                name="password"
                                onChange={handleInputChange} 
                                error={(erro?true:false)}
                                helperText={erro}
                            />
                            {/*erro && <p className="text-primaryRubeus-red">{erro}</p>*/}
                            <Button variant="contained" style={{ backgroundColor: '#0DA6A6', fontWeight: 600, padding: '6px 30px',color: "#FFFFFF" }} type="submit">Acessar</Button>
                            <Link href='/cadastro' className="text-sm text-primaryRubeus-green">Não tenho conta!</Link>
                        </CardForm>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login