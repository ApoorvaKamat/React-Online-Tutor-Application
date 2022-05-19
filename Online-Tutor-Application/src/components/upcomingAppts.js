import React from "react";
const Appointment=(props)=>{
    return(
        <div className="container">
        <div className="list">
            <div className="box" style={{color: "rgb(5, 68, 119)"}}>
            <div className="content">
                <div className="icon">
                <i className="bi bi-calendar2-event-fill"></i>
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
export default Appointment;