// styling
import React, { Component, useState } from 'react'
import Navbar from '../../component/Navbar'
import {Container, Col, Table, Form, Button,
   FormGroup, Input, Label, ModalHeader, ModalBody, Modal, ModalFooter} from 'reactstrap'
import {Alert} from 'react'
import styled from 'styled-components'
import {IoMdAddCircle} from 'react-icons/io'
import {FaPencilAlt, FaTrash} from 'react-icons/fa'

// redux
import {getBus, deleteBus} from '../../Redux/actions/admin/Buss'
import {GetDataAgent} from '../../Redux/actions/admin/Agent'
import {connect} from 'react-redux'

const Label1 = styled(Label)`
font-weight: bold;
color: black;`

const Icons = styled.span`
display: inline;
width: 100px;
padding: 5px;
cursor: pointer;
`

const Cols = styled(Col)`
margin-top: 20px;`

const CustomTable = styled(Table)`
font-weight: bold;
text-align: center;
`
const Content = styled(Container)`
display: flex;
justify-content: center;
margin-top: 20px;
`
const CustomTD = styled('td')`
text-align: left;`


class Bus extends Component {
   async componentDidMount() {
     try {
       await this.props.getBus()
        await this.props.deleteBus(this.props.id)
        await this.props.GetDataAgent()
        console.log('ini agent adasdasdasdasdasdasdasd')
     } catch (err) {
        console.log(err)
     }
  }
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      dropdownOpen: false
    }
    this.toggle = () => this.setState({modal: !this.state.modal })
  }

  
  render() {
    return (
      <>
      <Navbar/>
        <Content>
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
                    <th>Car's name</th>
                    <th>Seat</th>
                    <th>Option</th>
                  </thead>
                  <tbody>
                  { this.props.Bus.data.data && this.props.Bus.data.data.map((v,i)=>{
                      return (
                        <tr>
                          <th scope='row' key = { i }>{ i + 1} </th>
                          <td>{v.car_name}</td>
                          <td>{v.bus_seat}</td>
                          <td>
                              <Icons onClick={()=> Alert.alert('Edit data')}><FaPencilAlt/></Icons>
                              <Icons onClick={() => this.props.deleteBus(v.id)}><FaTrash /></Icons>
                          </td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                  <tbody>
                  <tr>
                    <CustomTD colspan={5} onClick={this.toggle} style={{cursor:'pointer'}}>
                      <span class='text-left'><IoMdAddCircle size={30} color='black'/><b>Add Car</b></span>
                    </CustomTD>
                  </tr>
                  </tbody>
                </CustomTable>
            </Cols>
            <div>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.className}>
                <ModalHeader toggle={this.toggle}>Add Bus</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for='agent'>Agent's name</Label>
                    <Input type='select' name='agent' id='agent'>
                      {this.props.Agent.data.data && this.props.Agent.data.data.map((v,i) => {
                        return (
                          <option>{v.name}</option>
                        )
                      })}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input type='text' name='name' placeholder='bus name'/>
                  </FormGroup>
                  <FormGroup>
                    <Input type='number' min={0} max={20} placeholder='Seat quota'/>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Add</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
        </Content>
        
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Bus: state.Busses,
    Agent: state.Agent
  }
}

const mapDispatchToProps = {getBus, deleteBus, GetDataAgent}
export default connect(mapStateToProps, mapDispatchToProps)(Bus)
