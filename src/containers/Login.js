import React, {Component} from 'react';
import {Form,Card} from 'react-bootstrap';
import {AppWrapper, CardWrapper, ImgWrapper} from '../assets/Style';
import Logo from '../images/logo.png';
import LoaderButton from '../components/LoaderButton';

export default class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }                                        

  handleChange = e =>{
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit () {

  }
  render(){
    return(
      <AppWrapper>
        <CardWrapper className="card">
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <ImgWrapper src={Logo} alt="Logo"/>
              <Form.Group controlId="email" bssize="large"> 
                <Form.Label>Email</Form.Label>
                <Form.Control autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="password" bssize="large">
                <Form.Label> Password </Form.Label>
                <Form.Control autoFocus type="password" value={this.state.password} onChange={this.handleChange}/>
              </Form.Group>
              <p style={{marginTop: 20}}>
                <a href='/login/resetPassword'>Forgot Password?</a>
              </p>
              <LoaderButton
                block       
                bssize= "large" 
                type="submit" 
                text= "Login"
              >  
              </LoaderButton>
            </Form>
          </Card.Body>
        </CardWrapper>
      </AppWrapper>
    );
  }
}