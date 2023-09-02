import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Input from "../input/input";

export default function PopupCadastroTbc() {
    return (
        <div className="bg-white bg-opacity-50 z-50 h-[100%] w-screen fixed flex justify-center items-center">
            <div className="bg-gray-400 rounded-t-lg w-2/4 ">
                <div className="flex justify-end bg-gray-300 rounded-t-lg">
                    <button className="w-7 h-7 text-xl"><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className="bg-gray-200 ">
                    <form >
                        <Input label="Link:" onChange={() => {console.log("oi")}} type="text" value="oi"/>
                        <Input label="Link:" onChange={() => {console.log("oi")}} type="text" value="oi"/>
                        <Input label="Link:" onChange={() => {console.log("oi")}} type="text" value="oi"/>
                        <Input label="Link:" onChange={() => {console.log("oi")}} type="text" value="oi"/>
                        <Input label="Link:" onChange={() => {console.log("oi")}} type="text" value="oi"/>

                    </form>
                    <h1>Pop up de cadastro</h1>
                </div>
            </div>
        </div>
    )
}