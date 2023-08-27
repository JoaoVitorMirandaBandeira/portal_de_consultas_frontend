'use client'
import Navbar from "@/components/navBar/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardTBC from "@/components/cardTbc/cardTbc";
import Image from 'next/image'
import fetchTbcsUser from "@/functions/fetchTbcUser";
import { useEffect, useState } from "react";
import { TTbc } from "@/@types/TTbc";
interface TbcsPropsInteface {
    params: { userID: string }
}

const Tbcs = ({ params }: TbcsPropsInteface) => {
    const [tbcData, setTbc] = useState<TTbc[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTbcsUser(params.userID)
            setTbc(data.tbcs)
            setLoading(false)
        }
        setTimeout(fetchData, 2000)
    }, [params.userID])

    return (
        <>
            <title>TBC`s</title>
            {loading && (
                <div className="bg-white bg-opacity-50 z-50 h-screen w-screen fixed flex justify-center items-center">
                    <Image src="/rbGif.gif" alt='Gif logo de loading' width={80} height={80} />
                </div>
            )}
            <Navbar userName="Joao" />
            <main className="mx-12">
                { (!loading) && (
                    <>
                        <section className="flex justify-between py-10 items-center ">
                            <h3 className="font-semibold  text-primaryRubeus-gray text-xl">TBC`s Cadastrados</h3>
                            <button className="bg-primaryRubeus-green px-6 py-1 rounded-lg text-white font-semibold flex items-center"><FontAwesomeIcon className="w-4 mr-1" icon={faPlus} />Cadastrar</button>
                        </section>
                        <section className="bg-white w-[98%] mx-auto pt-5 rounded-lg">
                            <CardTBC key='1' />
                            <CardTBC key='2' />
                            <CardTBC key='3' />
                        </section>
                    </>)}


            </main>
        </>
    )

}
export default Tbcs
