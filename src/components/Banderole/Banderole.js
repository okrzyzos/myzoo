import React from 'react'
import logo from '../../assets/images/chien.jpg'
import logo1 from '../../assets/images/cochon.jpg'
import logo2 from '../../assets/images/serpent.jpg'
import logo3 from '../../assets/images/croco.jpg'
import logo4 from '../../assets/images/requin.jpg'
import logo5 from '../../assets/images/oiseau.jpg'

export default function Banderole(props) {
    return (
        <>
        <div className="container">
        <div className="pictures ">
            <div className="row my-2">
<div className="col-2">
    <img src={logo} alt="logo chien" width="80px" />
</div>
<div className="col-2">
    <img className="img-fluid" src={logo1} alt="logo cochon" className="cochon"  />
</div>
<div className="col-2">
    <img src={logo2} alt="logo serpent" className="serpent" />
</div>
<div className="col-2">
    <img src={logo3} alt="logo croco" className="croco"  />
</div>
<div className="col-2">
    <img src={logo4} alt="logo requin" className="requin" />
</div>
<div className="col-2">
    <img src={logo5} alt="logo oiseau" className="oiseau" />
</div>



</div>

            </div>
</div>

<div className="row">
<div className="col-12">
<h1 className="titre">MyZoo</h1>

</div>
        </div>
        <hr class="foo" />


        </>
    )
}
