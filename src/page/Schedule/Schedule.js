import React, { Component } from 'react'
import {Container, Col, Table, Form,
  FormGroup, Input, Label} from 'reactstrap'
import styled from 'styled-components'
import {MdAddCircle} from 'react-icons/md'
import {FaPencilAlt,FaTrash} from 'react-icons/fa'
import Navbar from '../../component/Navbar'
import AddSchedule from '../Schedule/addSchedule'
import {connect} from 'react-redux'
import {showSchedule, deleteSchedule} from '../../Redux/actions/admin/Schedule'
import history from '../../utils/History'
import UpdateSchedule from './updateSchedule'


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
  constructor(props) {
    super(props)
    this.state = {
      sort: 0,
      sortKey: '',
      searchKey: '',
      search: '',
      sortCondition: true,
      modal: false,
      updateModal: false,
      idSchedule: 0
    }

    this.toggle = () => this.setState({modal: !this.state.modal })
    this.updateToggle = (e) => {
      this.setState({
        updateModal : !this.state.updateModal,
        idSchedule: e
      })
    }
    this.handleSort = (field) => {
      const sort = this.state.sort ? this.state.sort - 1 : this.state.sort + 1
      console.log(sort)
      this.props.showSchedule(this.props.Schedule.data.pageInfo.page, this.state.searchKey, this.state.search, field, parseInt(sort))
      this.setState({
        sort: sort,
        sortCondition: !this.state.sortCondition
      })
    }

    this.handleSearch = (e) => {
      this.setState({
        search: e.target.value
      })
      this.props.showSchedule(this.props.Schedule.data.pageInfo.page, this.state.searchKey, e.target.value, this.state.sortKey, parseInt(this.state.sort))
    }
    this.deleteSchedule = (id) => {
      this.props.deleteSchedule(id)
      this.props.showSchedule()
      history.push('/schedule')
    }
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
                      <Input type="text" name="search" id="searching" placeholder="Enter destination" onChange={this.handleSearch}/>
                    </Col>
                  </FormGroup>
                </Form>
                <Tablemid>
                  <thead>
                    <th>No</th>
                    <th onClick={()=>this.handleSort('schedules.id')} style={{cursor:'pointer'}}>Id Schedule</th>
                    <th onClick={()=>this.handleSort('schedules.price')} style={{cursor:'pointer'}}>Price</th>
                    <th onClick={()=>this.handleSort('schedules.departure_time')} style={{cursor:'pointer'}}>Departure Time</th>
                    <th onClick={()=>this.handleSort('schedules.arrive_time')} style={{cursor:'pointer'}}>Arrive Time</th>
                    <th onClick={()=>this.handleSort('schedules.departure_date')} style={{cursor:'pointer'}}>Departure Date</th>
                    <th onClick={()=>this.handleSort('routes.start')} style={{cursor:'pointer'}}>Start</th>
                    <th onClick={()=>this.handleSort('routes.end')} style={{cursor:'pointer'}}>Destination</th>
                    <th onClick={()=>this.handleSort('busses.bus_seat')} style={{cursor:'pointer'}}>Bus Seat</th>
                    <th>Options</th>
                  </thead>
                  <tbody>
                  { this.props.Schedule.data.data && this.props.Schedule.data.data.map((v,i)=>{
                        return (
                          <tr>
                            <th scope='row' key = { i }>{ i + 1} </th>
                            <td>{v.id}</td>
                            <td>{v.price}</td>
                            <td>{v.departure_time}</td>
                            <td>{v.arrive_time}</td>
                            <td>{v.departure_date.slice(0,10)}</td>
                            <td>{v.start}</td>
                            <td>{v.end}</td>
                            <td>{v.bus_seat}</td>
                            <td>
                              <Icons onClick={()=>this.updateToggle(v.id)} style={{cursor:'pointer'}}><FaPencilAlt/></Icons>
                              <Icons onClick={()=>this.props.deleteSchedule(v.id)} style={{cursor:'pointer'}}><FaTrash /></Icons>
                            </td>
                          </tr>
                        )
                      })
                    }   
                    <AddSchedule modal={this.state.modal} close={()=>this.setState({modal: false})}/>
                    <UpdateSchedule idSchedule={this.state.idSchedule} updateModal={this.state.updateModal} close={()=>this.setState({updateModal: false})} />              
                  <tr>  
                    <td colspan={10}>
                      <span onClick={this.toggle} style={{cursor: 'pointer'}}><MdAddCircle size={30}/>Add Schedule</span>
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
const mapDispatchToProps = {showSchedule, deleteSchedule}
export default connect(mapStateToProps, mapDispatchToProps) (Schedule)
