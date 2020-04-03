import React, { Component } from 'react'
import Navbar from '../component/Navbar'
import {Container, Col, Table, Form,
   FormGroup, Input, Label} from 'reactstrap'
import styled from 'styled-components'
import {IoMdAddCircle} from 'react-icons/io'
import {FaPencilAlt, FaTrash} from 'react-icons/fa'

const Label1 = styled(Label)`
font-weight: bold;
color: black;`

const Icons = styled.span`
display: inline;
width: 100px;
padding: 5px;
`

const Cols = styled(Col)`
margin-top: 20px;`

const CustomTable = styled(Table)`
font-weight: bold;
text-align: center;
`


export default class Bus extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <Container>
            <Cols md={12}>
                <Form>
                  <FormGroup row>
                    <Label1 for='searching' sm={1}>Search:</Label1>
                    <Col md={5}>
                      <Input type="text" name="search" id="searching" placeholder="Enter car's name" />
                    </Col>
                  </FormGroup>
                </Form>
                <CustomTable>
                  <thead>
                    <th>No</th>
                    <th>Agent's name</th>
                    <th>Car's name</th>
                    <th>Seat</th>
                    <th>Option</th>
                  </thead>
                  <tbody>

                  </tbody>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Toyo</td>
                    <td>Tayo</td>
                    <td>6</td>
                    <td>
                      <Icons><FaPencilAlt/></Icons>
                      <Icons><FaTrash/></Icons>
                    </td>
                  </tr>
                  <tr>
                    <td colspan={5}>
                      <span><IoMdAddCircle size={30} color='black'/><b>Add Car</b></span>
                    </td>
                  </tr>
                  </tbody>
                </CustomTable>
            </Cols>
        </Container>
      </>
    )
  }
}
