import Navbar from "@/components/navBar/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface TbcsPropsInteface {
    params: { userID: string }
}

const Tbcs = ({ params }: TbcsPropsInteface) => {
    return (
        <>
            <Navbar userName="Joao" />
            <main className="mx-12">
                <section className="flex justify-between py-5 items-center">
                    <h3 className="font-semibold  text-primaryRubeus-gray text-lg">TBC`s Cadastrados</h3>
                    <button className="bg-primaryRubeus-green px-6 py-1 rounded-lg text-white font-semibold flex items-center"><FontAwesomeIcon className="w-4 mr-1" icon={faPlus} />Cadastrar</button>
                </section>
                <section className="bg-white">
                    <h1>cards com tbc</h1>
                </section>
            </main>
        </>
    )

}
export default Tbcs
