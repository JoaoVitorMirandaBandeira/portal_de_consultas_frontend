import { TButtonProps } from "@/@types/TButtonProps"
import { Children } from "react"
import Style from './button.module.css'


const Button = ({children , ...props}:TButtonProps) => {
    return(
        <button {...props} className={Style.button}>{children}</button>
    )
}

export default Button