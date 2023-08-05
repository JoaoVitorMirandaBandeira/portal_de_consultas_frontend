import { faServer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardTBC = () => {
    return (
        <>  
            <div className="flex h-12 px-5 border-t-[1px] border-primaryRubeus-grayLight text-primaryRubeus-gray items-center">
                <FontAwesomeIcon icon={faServer} className="w-7"/>
                <h1>Card TBC</h1>
            </div>
        </>
    )
}
export default CardTBC