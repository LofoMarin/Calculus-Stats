import React from "react";
import {Link} from "react-router-dom";
import './Welcom.css';

function Welcom(){

    return(
<>

<div className="wrapper" id="mainApp">
                <div className="LogoText">
                    <h1> Calculus Stats</h1>
                    <p>Your Best Solution</p>
                </div>
                <button className="linkWrap style-4">
             <Link to={'/home'} className="letsStart">¡Vamos!</Link>
             <svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
                </button>
            </div>
</>
    )
}
export default Welcom