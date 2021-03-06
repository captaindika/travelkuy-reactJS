import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import Config from '../utils/Config'
import {setLogin} from '../Redux/actions/isLogin'
import {connect} from 'react-redux'
import image from '../image/beach-blue-car-combi-386025.jpg'
import history from '../utils/History'

const Column = styled(Col)`
background-color: #85A9BB;
border-radius: 20px;
`

const Press = styled(Button)`
padding: 8px 14px; // up down 8px, right left 14px
margin-bottom: 10px;
`

const Lab = styled(Label)`
font-weight: bold;
color: #EEEEEB`

const Content = styled(Container)`
display: flex;
align-items: center;
height: 70%;
`
const Background = styled('div')`
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
`

const Login = (props) => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitUsername = (e) => {
    setUsername(e.target.value)
  }
  const submitPassword = (e) => {
    setPassword(e.target.value)
  }

  const data = {
    username,
    password
  }
  
  const onLogin = async (e) => {
    e.preventDefault()
    props.setLogin(data)
  }  

  useEffect(() => {
    console.log(localStorage.getItem('token'))
  })
    return (
      <>
      <Background>
        <Content>
            <Column md={4}>
              <Form onSubmit={onLogin}>
                <FormGroup>
                  <Lab for='username'>Username</Lab>
                  <Input type='text' name='username' id='username' placeholder='Enter your username' onChange={submitUsername}></Input>
                </FormGroup>
                <FormGroup>
                  <Lab for='password'>Password</Lab>
                  <Input type='password' id='password' name='password' placeholder='Enter your password' onChange={submitPassword}></Input>
                </FormGroup>
                <Press color='secondary' type='submit'>Login</Press>
              </Form>
            </Column>
        </Content>
      </Background>
      </>
    )
  }
  const mapStateToProps = (state) => {
    return {
      data: state.isLogin
    }
  }
  const mapDispatchToProps = {setLogin}
  export default connect(mapStateToProps, mapDispatchToProps)(Login)