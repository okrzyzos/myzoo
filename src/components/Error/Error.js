import React from "react";
import TitreH1 from '../UI/Titre/TitreH1'


const error = (props) => ( <
    >


    <
    TitreH1 bgColor = "bg-danger" > Erreur { props.type } < /TitreH1>   <
    div > { props.children } <
    /div>  <
    />
);

export default error;