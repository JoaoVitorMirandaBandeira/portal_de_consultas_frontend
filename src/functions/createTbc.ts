import { TTbc } from "@/@types/TTbc";
import { checkIsAutenticated } from "@/utils/checkIsAutenticated";

export const createTbc = async ({ userId, dataForm }: { userId: string, dataForm: TTbc }) => {
    const require = await fetch(`https://rubeus-portal-consulta.cyclic.app/tbc/${userId}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${checkIsAutenticated()}`
        },
        body: JSON.stringify({
            description: dataForm.description,
            tbc: dataForm.tbc,
            homolog: dataForm.homolog,
            cod_coligada: dataForm.cod_coligada,
            cod_sistema: dataForm.cod_sistema,
            cod_filial: "1",
            userName: dataForm.username,
            password: dataForm.password
        })
    })
    const json = await require.json()
    if(require.status !== 200) console.log(json)
    return json

}