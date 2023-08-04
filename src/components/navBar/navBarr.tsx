import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

export default function Navbar({ userName }: { userName?: string }) {
    return (
        <nav className="bg-white flex justify-between px-6 items-center shadow-black drop-shadow-lg " >
            <div className="flex items-center ">
                <div className="mr-3 py-3">
                    <Image src="/logo-rubeus.png" alt="Lodo da empresa Rubeus LTDA" width='30' height='30' />
                </div>
                <p className="font-normal text-primaryRubeus-grayLight text-2xl">|</p>
                <p className="font-semibold px-3 text-primaryRubeus-gray text-sm">PORTAL DE CONSULTAS</p>
            </div>
            <div >
                {userName && <p className="font-semibold px-3 text-sm text-primaryRubeus-gray flex items-center">{userName.toUpperCase()}<FontAwesomeIcon className="w-4 ml-1" icon={faArrowRightFromBracket} /></p>}
            </div>
        </nav>
    )
}