'use client'
import Navbar from "@/components/navBar/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardTBC from "@/components/cardTbc/cardTbc";
import { GetServerSideProps } from "next";
import { checkIsAutenticated } from "@/utils/checkIsAutenticated";
interface TbcsPropsInteface {
    params: { userID: string }
}

const Tbcs = ({ params }: TbcsPropsInteface) => {
    console.log(params.userID)
    console.log(`https://rubeus-portal-consultas.cyclic.app/usertbcs/${params.userID}`)
    const fetchTbcs = async () => {
        const require = await fetch(`https://rubeus-portal-consultas.cyclic.app/usertbcs/${params.userID}`,{
            method:"GET",
            headers:{
                Authorization: `Bearer ${checkIsAutenticated()}`
            }
        })
        return await require.json()
    }
    console.log(fetchTbcs()); // Chame a função para buscar os dados
    console.log(checkIsAutenticated())
    return (
        // eslint-disable-next-line react/no-unescaped-entities
        <>  <title>TBC's</title>
            <Navbar userName="Joao" />
            <main className="mx-12">
              <section className="flex justify-between py-10 items-center ">
                    <h3 className="font-semibold  text-primaryRubeus-gray text-xl">TBC`s Cadastrados</h3>
                    <button className="bg-primaryRubeus-green px-6 py-1 rounded-lg text-white font-semibold flex items-center"><FontAwesomeIcon className="w-4 mr-1" icon={faPlus} />Cadastrar</button>
                </section>
                <section className="bg-white w-[98%] mx-auto pt-5 rounded-lg">
                    <CardTBC key='1'/>
                    <CardTBC key='2'/>
                    <CardTBC key='3'/>
                </section>

            </main>
        </>
    )

}
export default Tbcs
