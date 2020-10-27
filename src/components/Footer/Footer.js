import React from 'react'
import facebook from '../../assets/images/fb.png'
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/youtube.png'
import {NavLink} from 'react-router-dom'



export default function Footer() {
    return (
        <div>
            <footer className="bg-primary">
                <div className=" text-white text-center">Myzoo - tout droits réservés</div>
                <div className="row no-gutters align-items-center pt-2">
                    <div className="col-3">
                        <a href="#" className="d-block" target="_blank">
                            <img src={facebook} alt="logo facebook" className="imgFb" />
                        </a>

                    </div>
                    <div className="col-3">
                        <a href="#" className="d-block" target="_blank">
                            <img src={twitter} alt="logo facebook" className="imgTwitter" />
                        </a>

                    </div>
                    <div className="col-3">
                        <a href="#" className="d-block" target="_blank">
                            <img src={youtube} alt="logo tube" className="imgyoutube" />
                        </a>

                    </div>
                    <div className="col-3">
                    <NavLink to="/mention" className="nav-link p-0 m-0 mention">mentionLegales</NavLink>


                    </div>
</div>
            </footer>
        </div>
    )
}
