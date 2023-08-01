import Image from "next/image"

export default function Navbar(){
    return(
        <nav className="bg-white flex items-center shadow-black drop-shadow-lg " >
            <div className="ml-5 mr-3 py-3">
                <Image src="/logo-rubeus.png" alt="Lodo da empresa Rubeus LTDA" width='30' height='30'/>
            </div>
            <p className="font-normal text-primaryRubeus-grayLight text-2xl">|</p>
            <p className="font-semibold px-3 text-primaryRubeus-gray text-sm">PORTAL DE CONSULTAS</p>
        </nav>
    )
}