import React, { Component } from 'react'
import TitreH1 from '../../../components/UI/Titre/TitreH1'
import Formulaire from './Formulaire/Formulaire'


export default class Contact extends Component {
    render() {
        return (
            <div>
                <TitreH1 bgColor="bg-success">Contactez nous</TitreH1>
                <div className="container">
                    <h2>Adresse :</h2>
                    xxxxxxxxxxxxxxxxxxxxxxx
                    <h2>Telephone</h2>
                    1311231321321321
                    <h2>Vous préferez nous écrire?</h2>
                    <Formulaire />

                </div>
            </div>
        )
    }
}
