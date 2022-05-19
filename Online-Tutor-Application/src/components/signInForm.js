import React,{useState} from 'react'
import { Card } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import '../styles/signInForm.css'
import Home from './home';
import { useNavigate } from 'react-router-dom';

export default function SignInForm(props) {
   
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(email==='' || password === ''){
            setError(true);
        }
        else{
            setError(false);
            setSubmitted(true);
            if(props.userType === 'student'){
                navigate('/Student/Home');
            }
            else{
                navigate('/Tutor/Home')
            }
        }
    }

  return (
    <>
        <form className='formContainer'>
            {error && <div className='errorDiv'><i className="bi bi-exclamation-lg"></i>Incorrect Password.</div>}
            <div className='inputWrapper usernameContainer'>
                <i className="bi bi-envelope-fill"></i>
                <input className='input' value={email} type='email' onChange={handleEmail} placeholder="Enter your Email id"></input>
             </div> 
            <div className='inputWrapper passwordConatiner'>
                <i className="bi bi-key-fill"></i>
                <input className='input' value={password} type='password' onChange={handlePassword} placeholder="Enter Password"></input>
            </div>
            <div className='signInButtonContainer'>
                <button className={`signInButton ${email&&password?``:`disable`}`} onClick={handleOnSubmit}>Login</button>
            </div>
        </form>
    </>
  )
}
