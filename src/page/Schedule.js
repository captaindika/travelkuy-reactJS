import React, { Component } from 'react'
import {Container, Col, Table, Form,
  FormGroup, Input, Label} from 'reactstrap'
import styled from 'styled-components'
import {MdAddCircle} from 'react-icons/md'
import {FaPencilAlt,FaTrash} from 'react-icons/fa'
import Navbar from '../component/Navbar'


const Label1 = styled(Label)`
font-weight: bold;`

const Icons = styled.span`
display: inline;
width: 100px;
padding: 5px;
`
const Tablemid = styled(Table)`
font-weight: bold;
`

const Content = styled(Container)`
margin-top: 30px;`

export default class Schedule extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <Content>
            <Col md={12}>
                <Form>
                  <FormGroup row>
                    <Label1 for='searching' sm={1}>Search:</Label1>
                    <Col md={5}>
                      <Input type="text" name="search" id="searching" placeholder="Enter destination" />
                    </Col>
                  </FormGroup>
                </Form>
                <Tablemid>
                  <thead>
                    <th>No</th>
                    <th>From</th>
                    <th>Destination</th>
                    <th>Quota</th>
                    <th>Car's name</th>
                    <th>Price</th>
                    <th>Departure time</th>
                    <th>Arrival time</th>
                    <th>Date</th>
                    <th>Options</th>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Jakarta</td>
                    <td>Bogor</td>
                    <td>5</td>
                    <td>Tayo</td>
                    <td>100.000</td>
                    <td>10:00</td>
                    <td>12:00</td>
                    <td>1 April 2020</td>
                    <td>
                      <Icons><FaPencilAlt/></Icons>
                      <Icons><FaTrash/></Icons>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jakarta</td>
                    <td>Bandung</td>
                    <td>5</td>
                    <td>Tayo-tayo</td>
                    <td>100.000</td>
                    <td>06:00</td>
                    <td>10:00</td>
                    <td>1 April 2020</td>
                    <td>
                      <Icons><FaPencilAlt/></Icons>
                      <Icons><FaTrash/></Icons>
                    </td>
                  </tr>
                  <tr>
                    <td colspan={10}>
                      <span><MdAddCircle size={30}/>Add Schedule</span>
                    </td>
                  </tr>
                  </tbody>
                </Tablemid>
            </Col>
        </Content>
      </>
    )
  }
}
