import React from "react";
const CompletedAppts=(props)=>{
    return(
        <div className="container">
        <div className="list_cmplt">
            <div className="box" style={{color: "white"}}>
            <div className="content">
                <div className="icon">
                <i className="bi bi-calendar-check-fill"></i>
                </div>
                <div className="text">
                <h6>{props.tutor}</h6>
                <p>{props.date}</p>
                </div>
            </div>
            </div>
        
        </div>
        </div>
    );
};
export default CompletedAppts;