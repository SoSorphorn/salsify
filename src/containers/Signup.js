import React,{Component} from 'react';
import {AppWrapper, FormWrapper,ImgWrapper} from '../assets/Style';
import Logo from '../images/logo.png';
import {Form} from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';

export default class Signup extends Component{

  constructor(props){
    super(props);

    this.state={
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = event =>{
    return(
      this.setState({
        [event.target.id]: event.target.value
      })
    )
  }
  
  handleSubmit(){
      
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
          <Form.Group controlId="confirmPassword" bssize="large">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control autoFocus type="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
          </Form.Group>
          <LoaderButton
            block       
            bssize= "large" 
            type="submit" 
            text= "Signup"
          >  
          </LoaderButton>
        </FormWrapper>
      </AppWrapper>
    )
  }
}