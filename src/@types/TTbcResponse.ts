import { TLoginResponse } from "./TLoginResponse";

export type TTbcResponse = TLoginResponse & {
    tbcs: Array<{
        id: string;
        description: string;
        tbc: string,
        homolog: boolean,
        cod_coligada: number,
        cod_sistema: string,
        cod_filial: string
    }>;
}