import React, {useState} from 'react';
import "../App.css"
import { Container } from "react-bootstrap";
import { Form, Button, Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Inputs = () => {
    const [image, setImage] = useState('/images/pavan.jpg')
    const uploadImage = e =>{
      const reader=new FileReader();
    reader.onload = () => {
        if(reader.readyState===2){
            setImage(reader.result)
        }
    }
    reader.readAsDataURL(e.target.files[0])
        
    }
    return (
        <>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
      <section id="details">
        
        <div className="left-col">
         <h6>Account Settings</h6>
         <h6>Email Notification</h6>
         <h6 >session</h6>
        </div>
       
        <div className="right-col" >
          <Form >
            <img src={image} style={{ width:"60px"}}/>  
              <input type="file" 
              className="file" 
              accept="image/*" onChange={uploadImage}/>
              
              <br/><br></br>
                <Form.Row>
                  <Form.Group as={Col} controlId="formBasicfirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formBasiclast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last name" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email <span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                 
                <Form.Row>
                <Form.Group controlId="formGridPassword" as={Col}>
                  <Form.Label>Password <span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control type="password" placeholder="Password"  required />
                </Form.Group>
                <Form.Group controlId="formGridconPassword" as={Col}>
                  <Form.Label>Confirm Password <span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password"  required/>
                </Form.Group>
                </Form.Row>
                <Button  variant="dark" type="submit">Save Changes</Button>
              </Form>                    
        </div>
      
      </section>
        
    </Container>
         
      
        </>
    );
}

export default Inputs;
