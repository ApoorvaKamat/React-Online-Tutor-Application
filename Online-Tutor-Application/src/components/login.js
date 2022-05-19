import React, {useState} from 'react';
import '../styles/login.css';
import SignInForm from './signInForm';
import SignUpStudent from './signUpStudent';
import SignUpTutor from './signUpTutor';



export default function Login() {
  const [type,setType] = useState('');  
  const[isLinkSelected, setIsLinkSelected] = useState(false);
  const[showLoginText, setShowLoginText] = useState(false);
  const[role, setRole] = useState('');

  const TypeSelect = (optionName) =>{
      setIsLinkSelected(!isLinkSelected);
      setType(optionName);
      setShowLoginText(false);
      if(isLinkSelected){
          setRole('');
      }
  }
  const handleOptionClick =(roleValue)=> {
    if(!showLoginText){
        setShowLoginText(true);
    }
    setRole(roleValue);
    
  }
  const handleBackClick = () =>{
      TypeSelect('');
      setShowLoginText(false);
      setRole('');
  }
  console.log(showLoginText);
  

  return (
    <div className={showLoginText?`loginContainer`:`loginContainer`}>
        <div className='loginWrapper'>
            {/* <div className='loginHeader'>
                Welcome
            </div> */}
            <div className={isLinkSelected?`backButton`:`hideLink`} onClick={handleBackClick}><i className="bi bi-arrow-left"></i></div>
            <div className='loginNav'>
                <div className={type=='L'?`loginLink arrow-up-animate`:type=='S'?`hideLink`:`loginLink`} onClick = {()=>TypeSelect(isLinkSelected?'':'L')}>Login</div>
                <div className={type=='S'?`signUpLink arrow-up-animate`:type=='L'?`hideLink`:`signUpLink`} onClick = {()=>TypeSelect(isLinkSelected?'':'S')}>Sign Up</div>
                <div className={isLinkSelected?`loginOptions`:`options`}>
                    <div className={`studentOption ${role==='student'?'activeOption':''}`} onClick={()=> handleOptionClick('student')}>Student</div>
                    <div className={`tutorOption ${role==='tutor'?'activeOption':''}`} onClick={()=> handleOptionClick('tutor')}>Tutor</div>
                </div>
            </div>
        </div>
        <div className={type=='L'&&showLoginText?`infoContainer loginWrapper`:`hideLink`}>
            <SignInForm userType={role} />
        </div>
        <div className={type==='S'&&role==='student'?`infoContainer loginWrapper`:`hideLink`}>
            <SignUpStudent />
        </div>
        <div className={type==='S'&&role==='tutor'?`infoContainer loginWrapper`:`hideLink`}>
            <SignUpTutor />
        </div>
        
    </div>
  )
}
