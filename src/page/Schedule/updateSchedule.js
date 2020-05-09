import React, { Component } from 'react'
import {
  Modal, ModalHeader, Label, FormGroup, Input, ModalBody, ModalFooter, Button
} from 'reactstrap'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {showSchedule, updateSchedule} from '../../Redux/actions/admin/Schedule'
import {showRoutes} from '../../Redux/actions/admin/Route'
import {getBusForSchedule} from '../../Redux/actions/admin/Buss'
import {withRouter} from 'react-router-dom'
import history from '../../utils/History'

class UpdateSchedule extends Component {
  componentDidMount(){
    this.props.getBusForSchedule()
  }
  constructor(props) {
    super(props)
    this.state = {
      idBuss: 0,
      idRoute: 0,
      price: 0,
      departureTime: '',
      arriveTime: '',
      departureDate: '',
      selectedBus: null,
      disableInput: false
    }
    
    this.onAddSchedule = (event) => {
      this.setState({
        [event.target.start]: event.target.value
      })
    }
  
    this.onUpdate = async (e) => {
      e.preventDefault()
      const data = {
        idBus: this.state.idBuss,
        idRoute: this.state.idRoute,
        price: this.state.price,
        departureTime: this.state.departureTime,
        arriveTime: this.state.arriveTime,
        departureDate: this.state.departureDate
      }
      await this.props.updateSchedule(this.props.idSchedule,data).then(async () => {
        this.props.showSchedule()
        this.props.getBusForSchedule()
        this.props.close()
        history.push('/schedule')
        
      })
    }
  
    this.onHandleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    this.selectedBus = (e) => {
      this.setState({
        idBuss: e.target.value
      })
    }

    this.selectedRoute = (e) => {
      this.setState({
        idRoute: e.target.value
      })
    }

    this.closeModal = () => {
      this.setState({
        disableInput: false
      })
      this.props.close()
    }
  }
  render() {
    console.log(this.state)
    return (
      <>
        <div>
              <Modal isOpen={this.props.updateModal} className={this.className}>
                <ModalHeader >Update Schedule #ID {this.props.idSchedule}</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for='idBus'>Bus</Label>
                    <Input type='select' name='idBus' id='idBus' onFocus={()=>this.setState({disableInput: true})} onChange={this.selectedBus}  placeholder='select bus'>
                    <option disabled={this.state.disableInput} value="" hidden>{this.state.selectedBus === null ? 'Select Bus' : this.state.selectedBus}</option>
                      {this.props.Bus.dataSchedule.data && this.props.Bus.dataSchedule.data.map((v,i) => {
                          return (
                            <option onClick={()=>this.setState({selectedBus: v.name})} key={i} value={v.id}>{v.car_name}</option>
                          )
                        })}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for='idRoute'>Route</Label>
                    <Input type='select' name='idRoute' id='idRoute' onChange={this.selectedRoute} value={this.state.idRoute}>
                      {this.props.Route.data.data && this.props.Route.data.data.map((v,i) => {
                        return (
                          <option key={i} value={v.id}>{v.start} - {v.end}</option>
                        )
                      })}
                    </Input> 
                  </FormGroup>
                  <FormGroup>
                    <Label id='price'>Price</Label>
                    <Input type='number' min={0} name='price' id='price' onChange={this.onHandleChange} value={this.state.price}/>
                  </FormGroup>
                  <FormGroup>
                    <Label id='departureTime'>Departure Time</Label>
                    <Input type='time' name='departureTime' id='departureTime' onChange={this.onHandleChange} value={this.state.departureTime}/>
                  </FormGroup>
                  <FormGroup>
                    <Label id='arriveTime'>Arrive Time</Label>
                    <Input type='time' name='arriveTime' id='arriveTime' onChange={this.onHandleChange} value={this.state.arriveTime}/>
                  </FormGroup>
                  <FormGroup>
                    <Label id='departureDate'>Departure Date</Label>
                    <Input type='date' name='departureDate' id='departureDate' onChange={this.onHandleChange} value={this.state.departureDate}/>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.onUpdate}>Update</Button>
                  <Button color="secondary" onClick={this.props.close}>Cancel</Button>
                </ModalFooter>
              </Modal>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Route: state.Routes,
    Bus: state.Busses,
    Schedule: state.Schedules
  }
}

const mapDispatchToProps = {showRoutes, showSchedule, getBusForSchedule, updateSchedule}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateSchedule))