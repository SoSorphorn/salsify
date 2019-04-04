import React,{Component} from 'react';
import {AppWrapper, CardWrapper,ImgWrapper, CardLink} from '../assets/Style';
import Logo from '../images/logo.png';
import {Form, Card} from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';

export default class Signup extends Component{

  constructor(props){
    super(props);

    this.state={
      username: '',
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
        <CardWrapper>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <ImgWrapper src={Logo} alt="Logo"/>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control autoFocus type="text" value={this.state.username} onChange={this.handleChange}/>
              </Form.Group>
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
              <CardLink>
                <a href='/login'>I already have account</a>
              </CardLink>
            </Form>
          </Card.Body>
        </CardWrapper>
      </AppWrapper>
    )
  }
}