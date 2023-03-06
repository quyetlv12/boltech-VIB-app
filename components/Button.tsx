import {ButtonHTMLAttributes, MouseEventHandler} from "react";

export interface IButtonProp extends ButtonHTMLAttributes<any> {
    name: string;
    className? : string;
    onClick? : () => void;
}

export default function Button(props: IButtonProp): React.ReactElement<IButtonProp> {

    return (
        <button onClick={props.onClick} {...props} className={`py-2 px-4 text-600 text-[#fff] bg-brand-gradient rounded-[100px] ${props.className}`} >
            {props.name}
        </button>
    )
}