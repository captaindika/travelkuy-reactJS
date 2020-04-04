import React, { Component } from 'react'
import {Container, Col, Table, Form,
  FormGroup, Input, Label} from 'reactstrap'
import styled from 'styled-components'
import {MdAddCircle} from 'react-icons/md'
import {FaPencilAlt,FaTrash} from 'react-icons/fa'
import Navbar from '../component/Navbar'

import {connect} from 'react-redux'
import {showSchedule} from '../Redux/actions/admin/Schedule'


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

class Schedule extends Component {
  componentDidMount() {
    this.props.showSchedule()
  }
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
                    <th>Id Bus</th>
                    <th>Id Route</th>
                    <th>Price</th>
                    <th>Departure Time</th>
                    <th>Arrive Time</th>
                    <th>Departure Date</th>
                    <th>Options</th>
                  </thead>
                  <tbody>
                  { this.props.Schedule.data.data && this.props.Schedule.data.data.map((v,i)=>{
                        return (
                          <tr>
                            <th scope='row' key = { i }>{ i + 1} </th>
                            <td>{v.id_bus}</td>
                            <td>{v.id_route}</td>
                            <td>{v.price}</td>
                            <td>{v.departure_time}</td>
                            <td>{v.arrive_time}</td>
                            <td>{v.departure_date}</td>
                            <td>
                              <Icons><FaPencilAlt/></Icons>
                              <Icons><FaTrash/></Icons>
                            </td>
                          </tr>
                        )
                      })
                    }                  
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

const mapStateToProps = (state) => {
  return {
    Schedule: state.Schedules
  }
}
const mapDispatchToProps = {showSchedule}
export default connect(mapStateToProps, mapDispatchToProps) (Schedule)
