import { useAppSelector } from "@constants";
import { log } from "console";
import {ButtonHTMLAttributes, MouseEventHandler} from "react";
import { getInputStatus } from "store/buyInsurance";

export interface IButtonProp extends ButtonHTMLAttributes<any> {
    name: string;
    className? : string;
    onClick? : () => void;
    hiddenBtn? : boolean;
}

export default function Button(props: IButtonProp): React.ReactElement<IButtonProp> {
    const inputStatus = useAppSelector(getInputStatus);    
    return (
        <button type={props.type} onClick={props.onClick} {...props} className={`py-2 px-4 text-600 text-[#fff] bg-brand-gradient rounded-[100px] ${props.className} ${inputStatus && !props.hiddenBtn ? 'hidden' : ''}`} >
            {props.name}
        </button>
    )
}