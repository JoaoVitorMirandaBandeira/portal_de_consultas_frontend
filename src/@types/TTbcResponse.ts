export type TTbcResponse = [{
    id: string,
    name: string,
    email: string,
    status: boolean,
    permissions: {
        id: string,
        level: number,
        descricao: string
    },
    tbcs: Array<{
        id: string;
        description: string;
        tbc: string,
        homolog: boolean,
        cod_coligada: number,
        cod_sistema: string,
        cod_filial: string,
        username:string,
        password:string
    }>
}]