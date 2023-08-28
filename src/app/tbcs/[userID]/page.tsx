'use client'
import Navbar from "@/components/navBar/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardTBC from "@/components/cardTbc/cardTbc";
import Image from 'next/image'
import fetchTbcsUser from "@/functions/fetchTbcUser";
import { useEffect, useState } from "react";
import { TTbc } from "@/@types/TTbc";
import Loading from "@/components/loading/loading";
import { TTbcResponse } from "@/@types/TTbcResponse";
interface TbcsPropsInteface {
    params: { userID: string }
}

const Tbcs = ({ params }: TbcsPropsInteface) => {
    const [tbcData, setTbc] = useState<TTbc[]>([])
    const [loading, setLoading] = useState(true)
    const [userData,setUserData] = useState<TTbcResponse>()
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTbcsUser(params.userID)
            setUserData(data)
            setTbc(data[0].tbcs)
            setLoading(false)
        }
        setTimeout(fetchData, 2000)
    }, [params.userID])
    console.log(userData)
    return (
        <>
            <title>TBC`s</title>
            {loading && <>
                <Loading/>
                <Navbar />
            </>}
            {(!loading) && userData && (
            <>
            <Navbar userName={userData[0].name} />
            <main className="mx-12">
                { (!loading) && (
                    <>
                        <section className="flex justify-between py-10 items-center ">
                            <h3 className="font-semibold  text-primaryRubeus-gray text-xl">TBC`s Cadastrados</h3>
                            <button className="bg-primaryRubeus-green px-6 py-1 rounded-lg text-white font-semibold flex items-center"><FontAwesomeIcon className="w-4 mr-1" icon={faPlus} />Cadastrar</button>
                        </section>
                        <section className="bg-white w-[98%] mx-auto pt-5 rounded-lg">
                            {
                                tbcData.map((element) => {
                                    return <CardTBC key={element.id} title={element.description}/>
                                })
                            }
                        </section>
                    </>)}
            </main>
            </>)}
        </>
    )

}
export default Tbcs
