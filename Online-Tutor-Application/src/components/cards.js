import React,{useState} from "react";
import { MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter} from 'mdb-react-ui-kit';
import defaultProfilePic from "../assets/default-profile.svg"
import Button from './buttonLogin';
import Appointment from './upcomingAppts';
import CompletedAppts from "./completedAppts";
import Heart from "./heart";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import Stars from './starRating'
import TextField from "@material-ui/core/TextField";
const starRating = {
  size: 30,
  count: 5,
  half: true,
  onChange: newValue => {
    console.log(`Rating is ${newValue}`)
  }
}

export const Cards = (props) => {
const [selectedTutor, setSelectedTutor]= useState({});
 
const [buttonName, setButtonName] = useState('');
const [centredModal, setCentredModal] = useState(false);
const [inputValue, setInputValue] = useState("");
const handleUserInput = (e) => {
  setInputValue(e.target.value);
};
const resetInputField = () => {
  setInputValue("");
  setCentredModal(!centredModal);
};
const toggleShow = () => {
  setCentredModal(!centredModal);
  setInputValue("");
}
const onButtonClick = (buttonName,tutor) => {
setSelectedTutor(tutor);
 setButtonName(buttonName);
 setCentredModal(!centredModal);

}
const [startDate, setStartDate] = useState(
  setHours(setMinutes(new Date(), 0), 17)
);
// const toggleShow = () => setCentredModal(!centredModal);
  const [heart,setHeartSelected] = useState([]);
  const onHeartSelect = (ind) => {
   
     let selectedArray = [...heart];
     if(selectedArray.indexOf(ind) == -1){
       selectedArray.push(ind);
       
     }
     else{
       selectedArray.splice(selectedArray.indexOf(ind),1);
     }
     setHeartSelected(selectedArray);
  }

  

  return(
        <>
          {props.isNewPage !== 'newPage' && <div className="appointmentContainer">
          <div className={`appointment_col ${props.filterData.length===0?'removeTransform':''}`}>
            <h4 style={{color: "black", alignContent:"center"}}>Upcoming Appointments</h4>
            <Appointment tutor="Virtual Reality: Apoorva Pise" date="15th May: 12:00 pm - 2:00 pm"/>
            <Appointment tutor="Python: Shambhavi Sant" date="20th May: 5:00 pm - 7:00 pm"/>
            <Appointment tutor="C++ : Apoorva Kamat" date="21th May: 10:00 am - 12:00 pm"/>
            <h4 style={{color: "black", alignContent:"center"}}>Completed Appointments</h4>
            <CompletedAppts tutor="Virtual Reality: Apoorva Pise" date="10th May: 12:00 pm - 2:00 pm"/>
            <CompletedAppts tutor="Python: Shambhavi Sant" date="5th May: 2:00 pm - 3:30 pm"/>
          </div>
          </div>}
        
    
            {props.filterData && props.filterData.map((tutor,index)=>{
            const {tutorName,tutorExpertise, profilePicture, tutorDescription, tutorLocation, tutorRating, workingHours} = tutor;
            return <div key={`tutor-${index}`}   className="bg-light opacity-75 tutor-card-container" >
                <div className="tutor-name">{tutorName}<span className="favorite"><i className={heart.indexOf(index)>-1? `bi bi-heart-fill` : `bi bi-heart`} onClick = {()=>onHeartSelect(index)}></i></span></div>
                
                <div className="tutor-profile">
                  <div className="profile-pic-container">
                     <img src={profilePicture?profilePicture:defaultProfilePic} alt={defaultProfilePic} className="profile-pic"></img>
                  </div>
                  <div className="profile-details">
                  <div className="subject">
                  <span><i className="bi bi-trophy-fill"></i> {tutorExpertise}</span>
                </div>
                <div className="rating">
                    <span className="star"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>
                      <span> {tutorRating}</span>
                </div>
                   
                    <div className="location">
                    <span><img className="us-flag" alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/></span>
                      <span>  {tutorLocation.city},{tutorLocation.state},{tutorLocation.country}</span>
                     </div>
                    <div className="working hours">
                    <span className="bold-font">{workingHours}</span>
                    </div>
                      <div className="labels">
                      <ul className="postcard__tagbox">
					                <li className="tag__item"><i className="bi bi-patch-check-fill"></i> Teaching Certificate</li>
                          <li className="tag__item"><i className="bi bi-chat-heart-fill"></i> 1,000+chats</li>
                      </ul>
                      </div>
                      <div className="description">
                      <span className=" postcard__preview-txt"> </span> 
                      <span>{tutorDescription}</span>
                    </div>
                  
                  </div>
                </div>
                <div>
                  
                <button className="btn btn-light btn-md ms-2 loginSignUp button-card" onClick={()=>onButtonClick('profile',tutor) }>Profile</button>
                <button className="btn btn-light btn-md ms-2 loginSignUp button-card" onClick={()=>onButtonClick('rating',tutor)}>Rating</button>
                <button className="btn btn-light btn-md ms-2 loginSignUp button-card"onClick={()=>onButtonClick('booking',tutor)}>Booking</button>
              
              <div>     
              {
                (() => {
                    if(buttonName==='profile') {
                            return (
                            
                              <MDBModal  tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                              <MDBModalDialog >
                                <MDBModalContent>
                                  <MDBModalHeader>
                                    <MDBModalTitle>{selectedTutor.tutorName}</MDBModalTitle>
                                    <button className="btn btn-danger btn-md " onClick={toggleShow}>Close</button>
                                  </MDBModalHeader>
                                  <MDBModalBody >
                                 <div>
                                  <span className="bold-font"> Know your tutor : </span>
                                  <span>{selectedTutor.aboutTutor}</span>
                                 </div>
                                <div>
                                  <span className="bold-font"> No.of working hours : </span>
                                  <span>{selectedTutor.noOfHrsPerDay}</span>
                                </div>
                                <div>
                                  <span className="bold-font"> No.of available appointments : </span>
                                  <span>{selectedTutor.noOfAppointmentsAvailable}</span>
                                </div>
                                
                                  </MDBModalBody>
                                
                                </MDBModalContent>
                              </MDBModalDialog>
                            </MDBModal>
                            )
                        } else if (buttonName==='rating') {
                            return (
                              <MDBModal  tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                              <MDBModalDialog >
                                <MDBModalContent>
                                  <MDBModalHeader>
                                    <MDBModalTitle>{selectedTutor.tutorName}</MDBModalTitle>
                                    <div className='d-flex justify-content-center'>
                                    
                                    <button className="btn btn-success mr-2" onClick={resetInputField}>Submit</button>
                                    <button className="btn btn-danger btn-md " onClick={toggleShow}>Close</button>
                                    </div>
                                  </MDBModalHeader>
                                  <MDBModalBody >
                              <div>
                              <span className="bold-font" > Share your feedback </span>
                                <TextField  color="primary" focused value={inputValue} onChange={handleUserInput}/>
                                <Stars {...starRating} />
                                
                            </div>
                            </MDBModalBody>
                                 
                                </MDBModalContent>
                              </MDBModalDialog>
                            </MDBModal>
                          
          
                            )
                        } else {
                            return (
                              <MDBModal className="modal" tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                              <MDBModalDialog >
                                <MDBModalContent className="modalcontent">
                                  <MDBModalHeader>
                                    <MDBModalTitle>{selectedTutor.tutorName}</MDBModalTitle>
                                    
                                    {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
                                    <div className='d-flex justify-content-center'>
                                    <button className="btn btn-success mr-2" onClick={resetInputField}>Book</button>
                                    <button className="btn btn-danger btn-md " onClick={toggleShow}>Cancel</button>
                                    </div>
                                  </MDBModalHeader>
                                  <MDBModalBody >
                                  <DatePicker className="date-picker-wrapper"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    minTime={setHours(setMinutes(new Date(), 0), 9)}
                                    maxTime={setHours(setMinutes(new Date(), 0), 19)}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                  />
                                 
                                 
                                  </MDBModalBody>
                                  <MDBModalFooter>   
                                  </MDBModalFooter>
                                </MDBModalContent>
                              </MDBModalDialog>
                            </MDBModal>
                            )
                        }
                })()  
            }  
        </div>  
                     
                    </div>
                 
            
                    </div>
                 
          }
        )
        
        }
      
      
        </>

        
    )
}
