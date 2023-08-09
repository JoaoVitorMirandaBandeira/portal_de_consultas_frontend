import Input from "@/components/input/input"

const CadastrarTBC = () => {
    return (
        <div className="z-50">
            <h1>Modal de cadastro de tbc</h1>
            <Input
                label="Nome"
                type="text"
                value="2"
                onChange={() => { console.log("") }}
            />
        </div>
    )
}
export default CadastrarTBC