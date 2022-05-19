import React from "react";
import { useNavigate } from 'react-router-dom';


const Button=(props)=>{
    const navigate = useNavigate();
    const handleOnClick = () => {
        if(props.name === 'Log Out'){
            navigate('/');
        }
        if(props.name === 'Profile'){
            navigate('/Tutor/Profile')
        }
    }
    return(
        <div>
            <button  className={`btn btn-light btn-md ms-2 loginSignUp `} onClick={handleOnClick}>{props.name} </button>
        </div>
    );
};
export default Button;