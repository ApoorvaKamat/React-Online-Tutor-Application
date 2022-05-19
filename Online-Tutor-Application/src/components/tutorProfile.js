import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/tutorProfile.css';
import Button from './buttonLogin';

export default function TutorProfile() {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState('WPL, AOS, Maths');
    const [profilePic, setProfilePic] = useState();
    const [city, setCity] = useState('Dallas');
    const [dstate,setDstate] = useState('Texas');
    const [country,setCountry] = useState('USA');
    const [aboutMe,setAboutMe] = useState('I love Teaching WPL and.. Advanced Operationg Systems...');

    const handleSubjects = (e) => {
        setSubjects(e.target.value);
    }

    const handleProfilePic = (e) => {
        console.log(e.target.files)
        setProfilePic(URL.createObjectURL(e.target.files[0]));
    }

    const handleCity= (e) =>{
        setCity(e.target.value);
    }

    const handleState= (e) =>{
        setDstate(e.target.value);
    }

    const handleCountry= (e) =>{
        setCountry(e.target.value);
    }

    const handleAboutMe= (e) =>{
        setAboutMe(e.target.value);
    }
    const handleOnBackClick = () =>{
        navigate('/Tutor/Home');
    }
  return (
      <>
      <nav className="navbar navbar-expand-sm bg-info navbar-dark bg-dark ps-5 pe-5 navblack">
                <div className="collapse navbar-collapse justify-content-end pe-3"> 
                        <Button name="Profile"/>
                        <Button name="Log Out"/>   
                </div>                   
        </nav>   
     <div className='mainContainer'>
     <img src='/images/shamma.png' alt='Profile Pic' className='profilePic'></img>
    <div className='profileContainer'>
    <div className='inputWrapper firstNameContainer'>
        <i className="bi bi-bookmark-check-fill"></i>
        <input className='input' value={city} type='text' onChange={handleCity} placeholder="City"></input>
    </div>
    <div className='inputWrapper firstNameContainer'>
        <i className="bi bi-bookmark-check-fill"></i>
        <input className='input' value={dstate} type='text' onChange={handleState} placeholder="State"></input>
    </div>
    <div className='inputWrapper firstNameContainer'>
        <i className="bi bi-bookmark-check-fill"></i>
        <input className='input' value={country} type='text' onChange={handleCountry} placeholder="Country"></input>
    </div>
    <div className='inputWrapper firstNameContainer'>
        <i className="bi bi-bookmark-check-fill"></i>
        <input className='input' value={subjects} type='text' onChange={handleSubjects} placeholder="Enter Subjects you wish to teach"></input>
    </div>
    <div className='inputWrapper firstNameContainer'>
        <i className="bi bi-bookmark-check-fill"></i>
        <input className='input' value={aboutMe} type='text' onChange={handleAboutMe} placeholder="Tell Something about yourself"></input>
    </div>
    {/* <div className='inputWrapper'>
        <i className="bi bi-person-plus-fill"></i>
        <input className='input' value={profilePic} type='file' accept="image/png, image/jpeg" onChange={handleProfilePic} placeholder="Insert Profile Pic"></input>
    </div> */}
    <div className='signInButtonContainer customMarginTop'>
    {/* <button className={`signInButton ${shouldEnableSubmitButton()?``:`disable`}`} onClick={handleOnSubmit}>Submit</button> */}
    <button className={`signInButton backButton`} onClick={handleOnBackClick}><i className="bi bi-caret-left-fill"></i></button>
    </div>               
    </div>
    </div>
    </>

  )
}
