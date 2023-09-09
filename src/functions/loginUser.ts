import { TLogin } from "@/@types/TLogin";
import { TLoginResponse } from "@/@types/TLoginResponse";

const loginUser = async (formData: TLogin): Promise<TLoginResponse> => {
    try {
        const require = await fetch(`https://rubeus-portal-consulta.cyclic.app/login`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": formData.email,
                "password": formData.password
            })
        })
        const json = await require.json()
        if (require.status !== 200) throw new Error(`E-mail ou senha invalidos`)
        console.log(json)
        return json
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default loginUser