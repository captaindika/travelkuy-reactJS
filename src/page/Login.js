import React, { Component } from 'react'
import styled from 'styled-components'
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'

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
flex-direction: row-reverse;
align-items: center;
height: 70%;
`


export default class Login extends Component {
  render() {
    return (
      <>
        <Content>
            <Column md={4}>
              <Form>
                <FormGroup>
                  <Lab for='username'>Username</Lab>
                  <Input type='text' name='username' id='username'placeholder='Enter your username'></Input>
                </FormGroup>
                <FormGroup>
                  <Lab for='password'>Password</Lab>
                  <Input type='password' id='password' name='password' placeholder='Enter your password'></Input>
                </FormGroup>
              </Form>
              <Press color='secondary'>Login</Press>
            </Column>
        </Content>
      </>
    )
  }
}
