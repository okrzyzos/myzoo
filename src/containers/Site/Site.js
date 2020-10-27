import React, { Component } from 'react'
import Navbar from '../../components/UI/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import Accueil from './Accueil/Accueil'
import Parc from './Parc/Parc'
import Error from '../../components/Error/Error'
import Banderole from '../../components/Banderole/Banderole'
import Footer from '../../components/Footer/Footer'
import Mention from './Mention/Mention'
import Contact from './Contact/Contact'






export default class Site extends Component {
    render() {
        return ( 
        <>
            <div className = "site">
            <Banderole />
            <Navbar />
            <Switch>
            <Route path = "/contact"
            exact render = {
                () => <Contact />} />
            <Route path = "/animaux"
            exact render = {
                () => <Parc />} />
                <Route path = "/"
                exact render = {
                    () => < Accueil />
                }
                /> 
                <Route path = "/mention"
                exact render = {
                    () => <Mention />
                }
                /> 
                <Route render = {
                () => <Error type="404"> La page n 'existe pas</Error>} /> 

                </Switch>  
<div className="minsite"></div>
                </div> 
                <Footer>


                </Footer>
                </>
            )
        }
    }