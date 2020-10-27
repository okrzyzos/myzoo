import React, { Component } from 'react'
import TitreH1 from '../../../components/UI/Titre/TitreH1'
import axios from 'axios';
import Animal from './Animal/Animal'

export default class Parc extends Component {



    state = {
        animaux: null
    }

    componentDidMount = () => {
        axios.get(`http://localhost/SERVEURANIMAUX/front/animaux`)
            .then(reponse => {
                this.setState({ animaux: Object.values(reponse.data) })
            })
    }
handleSelectionFamille = (idFamille) => {
    console.log(`demnde de ${idFamille}`)
}
handleSelection = (idContinent) => {
    console.log(`demnde de ${idContinent}`)
}
    render() {
        return (
            <div>
                <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
                <div className="container-fluid">
                    <div className="row no-gutters">
                    {
                        this.state.animaux &&
this.state.animaux.map(animal => {
    return (
        <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                    <Animal {...animal} filterFamille={this.handleSelectionFamille} />
                </div>

    )
})


}




            </div>
            </div>
            </div >
        )
    }
}
