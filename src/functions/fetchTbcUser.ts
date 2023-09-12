import { TTbcResponse } from "@/@types/TTbcResponse"
import { checkIsAutenticated } from "@/utils/checkIsAutenticated"

const fetchTbcsUser = async (userID:string):Promise<TTbcResponse> => {
    const require = await fetch(`https://rubeus-portal-consulta.cyclic.app/usertbcs/${userID}`,{
        method:"GET",
        headers:{
            Authorization: `Bearer ${checkIsAutenticated()}`
        }
    })
    return await require.json()
}

export default fetchTbcsUser