import { faPenToSquare, faServer, faHourglass2, faRocket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { RocketLaunchRounded, HourglassTopRounded } from '@mui/icons-material';
import ButtonMenu from "../buttonMenu/ButtonMenu";
type TCardTbc = {
    title: string,
    link: string,
    homolog: boolean
}


const CardTBC = ({ title, link, homolog }: TCardTbc) => {
    return (
        <>
            <div className="grid grid-cols-12 h-12 px-5 border-t-[1px] border-primaryRubeus-vetores items-center hover:bg-primaryRubeus-hover">
                <div className="flex text-primaryRubeus-gray col-start-1 col-span-4">
                    <FontAwesomeIcon icon={faServer} className="w-6" />
                    <h1 className="truncate ml-3 w-40 sm:w-72 md:w-full lg:w-full xl:w-full"><abbr className="no-underline" title={title} >{title}</abbr></h1>
                </div>
                <div className="col-start-5 col-span-5 text-primaryRubeus-gray">
                    <p className="truncate ml-3 w-36 sm:w-64 md:w-11/12 lg:w-11/12 xl:w-11/12"><abbr className="no-underline" title={link} >{link}</abbr></p>
{/*                     <p>{link}</p> */}
                </div>
                <div className="col-start-10 col-span-2  text-primaryRubeus-gray">
                    <p>{homolog ? <HourglassTopRounded /> : <RocketLaunchRounded />}</p>
                </div>
                <div className="text-primaryRubeus-grayLight hover:text-primaryRubeus-gray col-start-12 justify-self-end">
                    <ButtonMenu />
                </div>
            </div>
        </>
    )
}
export default CardTBC