import { ReactNode } from "react"

interface CardForm{
    children: ReactNode,
    title:string
}

export default function CardForm({children,title}:CardForm){
    return(
        <div className="bg-white h-72 w-72 flex flex-col items-center justify-evenly rounded-lg shadow-xl shadow-primaryRubeus-gray">
            <h1 className="font-bold text-2xl text-primaryRubeus-gray">{title}</h1>
                {children}
        </div>
    )
}