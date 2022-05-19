
import React from "react";
import Card from "react-bootstrap/Card";
const AvgTutorRating=()=>{
    
return (
<>
  {['Light'].map((variant) => (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ 
        width: '18rem',
        height: '10rem',
       
        marginTop: '30rem',
        marginLeft: '2rem'
     }}
      className="mb-2"
    >
      
      <Card.Body>
        <Card.Title style={{textAlign:'center',color:'green',border:'double',fontWeight: 'bold',fontSize:'35px' }}>Average Rating</Card.Title>
        <Card.Text style={{paddingLeft:'60px',fontSize:'50px',border:'double'}}>
          4.5/5
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
</>
    );
  }
export default AvgTutorRating;