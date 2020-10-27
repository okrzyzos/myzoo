import React from 'react'

export default function Formulaire(props) {
    return ( <
        >
        <
        form >
        <
        div className = "form-group" >
        <
        label htmlFor = "nom" > Nom: < /label> <
        input type = "text"
        className = "form-control"
        id = "nom" / >
        <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "email" > Email: < /label> <
        input type = "email"
        className = "form-control"
        id = "email" / >
        <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "Message" > Example textarea < /label> <
        textarea className = "form-control"
        id = "message"
        rows = "3" > < /textarea> <
        /div>

        <
        button type = "submit"
        className = "btn btn-primary" > Envoyer < /button> <
        /form> <
        />
    )
}