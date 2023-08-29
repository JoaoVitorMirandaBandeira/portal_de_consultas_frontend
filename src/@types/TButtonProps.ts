import { ReactNode } from "react"

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children:ReactNode
}