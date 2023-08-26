export type TLoginResponse ={
    user:{
        id:string,
        name:string,
        email:string,
        status:boolean,
        permissions:{
            id: string,
            level: number,
            descricao: string
        }
    },
    token:string
    
}
