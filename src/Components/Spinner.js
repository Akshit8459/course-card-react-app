import React from "react";
import './Spinner.css';

function Spinner(){
    return(
        <div>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner;