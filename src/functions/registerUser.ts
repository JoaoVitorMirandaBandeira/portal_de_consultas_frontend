import { TRegister } from "@/@types/TRegister";
import { TRegisterResponse } from "@/@types/TRegisterResponse";

const registerUser = async (formData: TRegister): Promise<TRegisterResponse> => {
    try {
        const require = await fetch(`https://rubeus-portal-consultas.cyclic.app/register`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": formData.name,
                "email": formData.email,
                "password": formData.passWord,
                "status": false,
                "permissions_id": "a7f575c5-7e1a-4d6c-95a0-9c4f6c11b5ca"
            })
        })
        const json = await require.json()
        if(require.status !== 201) throw new Error(json.error)
        console.log(json)
        return json
    } catch (error:any) {
        throw new Error(error.message)
    }

}

export default registerUser