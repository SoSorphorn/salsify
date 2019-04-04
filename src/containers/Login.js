import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import {AppWrapper, FormWrapper, ImgWrapper} from '../assets/Style';
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
        <FormWrapper onSubmit={this.handleSubmit}>
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
          <hr></hr>
          <LoaderButton
            block       
            bssize= "large" 
            type="submit" 
            text= "Login"
          >  
          </LoaderButton>
        </FormWrapper>
      </AppWrapper>
    );
  }
}