import React, { Component } from 'react'
import TitreH1 from '../../../components/UI/Titre/TitreH1'
import logo from '../../../assets/images/tigre.jpg'

export default class Accueil extends Component {


componentDidMount = () =>{
document.title = "Parc d'animaux myzoo!!"
}


    render() {
        return (
            <>
                <TitreH1>Venez visiter le parc d'animaux MyZoo!!</TitreH1>
                <div className="container">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla reprehenderit assumenda quaerat tempora esse excepturi libero temporibus necessitatibus doloremque aperiam id repellendus doloribus, corrupti soluta fuga veritatis ratione vitae. Incidunt, deleniti debitis! Natus doloremque asperiores numquam, ullam minus facere quaerat eligendi repudiandae nesciunt adipisci molestias quae qui eum? Fugit.</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla reprehenderit assumenda quaerat tempora esse excepturi libero temporibus necessitatibus doloremque aperiam id repellendus doloribus, corrupti soluta fuga veritatis ratione vitae. Incidunt, deleniti debitis! Natus doloremque asperiores numquam, ullam minus facere quaerat eligendi repudiandae nesciunt adipisci molestias quae qui eum? Fugit.</p>
                    <div className="row align-items-center no-gutters">
                        <div className="col-12 col-md-6 ">
                            <img src={logo} alt="logo site" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 ">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla reprehenderit assumenda quaerat tempora esse excepturi libero temporibus necessitatibus doloremque aperiam id repellendus doloribus, corrupti soluta fuga veritatis ratione vitae. Incidunt, deleniti debitis! Natus doloremque asperiores numquam, ullam minus facere quaerat eligendi repudiandae nesciunt adipisci molestias quae qui eum? Fugit.</p>
                        </div>
                        </div>
                        <div className="row align-items-center no-gutters">
                        <div className="col-12 col-md-6 ">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla reprehenderit assumenda quaerat tempora esse excepturi libero temporibus necessitatibus doloremque aperiam id repellendus doloribus, corrupti soluta fuga veritatis ratione vitae. Incidunt, deleniti debitis! Natus doloremque asperiores numquam, ullam minus facere quaerat eligendi repudiandae nesciunt adipisci molestias quae qui eum? Fugit.</p>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <img src={logo} alt="logo site" className="img-fluid" />
                        </div>

                    </div>


                </div>
            </>
        )
    }
}
