import React from 'react'

export default function TitreH1(props) {

let backgroundColor = props.bgColor ? props.bgColor : "bg-primary";
    let monCss = `border border-dark text-white text-center  p-2  ${backgroundColor}`;
    return (
        <div>
            <h1 className={monCss}>{props.children}</h1>
        </div>
    )
}
