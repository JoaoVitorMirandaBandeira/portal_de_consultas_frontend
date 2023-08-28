import { faPenToSquare, faServer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type TCardTbc = {
    title:string,
    key:string
}

const CardTBC = ({title,key}:TCardTbc) => {
    return (
        <>  
            <div key={key}className="flex justify-between h-12 px-5 border-t-[1px] border-primaryRubeus-grayLight items-center">
                <div className="flex text-primaryRubeus-gray">
                    <FontAwesomeIcon icon={faServer} className="w-6"/>
                    <h1 className="truncate ml-3 w-40 sm:w-72 md:w-full lg:w-full xl:w-full"><abbr className="no-underline" title={title} >{title}</abbr></h1>
                </div>
                <div className="text-primaryRubeus-grayLight hover:text-primaryRubeus-gray">
                    <button>
                        <FontAwesomeIcon icon={faPenToSquare} className="w-4"/>
                    </button>
                </div>
            </div>
        </>
    )
}
export default CardTBC