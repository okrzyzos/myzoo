import React from "react";
import logo from '../../../assets/images/tigre.jpg'
import {NavLink} from 'react-router-dom'

const navbar = (props) => (

    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<a className="navbar-brand" href="#">
<img src={logo} alt="logo myzoo"  width='30px' className="rounded"/>
</a>
<button className="navbar-toggler" type ="button">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarColor01">
<ul className="navbar-nav mr-auto">
<li className="nav-item active">
<NavLink to="/" exact className="nav-link">Accueil</NavLink>
</li>
<li className="nav-item active">
<NavLink to="/contact" exact className="nav-link">Contact</NavLink>

</li>
<li className="nav-item active">
<NavLink to="/animaux" exact className="nav-link">Les animaux</NavLink>

</li>




</ul>

</div>
</nav>
</div>





);
export default navbar;

