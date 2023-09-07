import { ReactNode } from "react"

interface CardForm {
    children: ReactNode,
    title: string
}

export default function CardForm({ children, title }: CardForm) {
    return (
        <div className="bg-white p-5 gap-4 h-max w-96 flex flex-col items-center justify-evenly rounded-lg shadow-xl shadow-primaryRubeus-gray">
            <h1 className="font-extrabold text-2xl text-primaryRubeus-gray">{title}</h1>
            {children}
        </div>
    )
}