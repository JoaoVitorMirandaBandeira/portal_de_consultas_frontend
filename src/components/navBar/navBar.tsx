import Image from "next/image"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import LogoutIcon from '@mui/icons-material/Logout';


type TNavBarProps = {
    userName?: string,
    updateCounter?: (newCounterValue: boolean) => void
}

export default function Navbar({ userName, updateCounter }: TNavBarProps) {
    const router = useRouter()
    const logout = () => {
        Cookies.remove('Atentication')
        if(updateCounter) updateCounter(true)
        setTimeout(() => router.push('/login'), 1500)
    }
    return (

        <nav className="bg-white flex justify-between px-6 items-center shadow-black drop-shadow-lg" >
            <div className="flex items-center ">
                <div className="mr-3 py-3">
                    <Image src="/logo-rubeus.png" alt="Lodo da empresa Rubeus LTDA" width='30' height='30' />
                </div>
                <p className="font-normal text-primaryRubeus-grayLight text-2xl">|</p>
                <p className="font-semibold px-3 text-primaryRubeus-gray text-sm">PORTAL DE CONSULTAS</p>
            </div>
            <div>
                {userName && <p onClick={logout} className="font-semibold px-3 text-sm text-primaryRubeus-gray flex items-center cursor-pointer">{userName.toUpperCase()}<LogoutIcon/></p>}
            </div>
        </nav>
    )
}