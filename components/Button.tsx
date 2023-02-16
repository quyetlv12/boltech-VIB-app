import {ButtonHTMLAttributes} from "react";

export interface IButtonProp extends ButtonHTMLAttributes<any> {
    name: string;
}

export default function Button(props: IButtonProp): React.ReactElement<IButtonProp> {

    return (
        <button {...props} className={`py-2 px-4 text-600 rounded-full rounded text-white bg-brand-gradient`}>
            {props.name}
        </button>
    )
}