import React from "react";
const Option=(props)=>{
    return(
        <div>
            <div className="collapse navbar-collapse justify-content-end pe-3">
                     
                     <a href="#" className="text-white p-4 nav-item nav-link navElementAdjust"> 
                         <i className={props.symbol}></i>{props.option}</a>
            </div>
        </div>
    );
};
export default Option;