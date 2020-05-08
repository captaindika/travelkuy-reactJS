import React, { Component } from 'react'
import {Container, Col, Table, Form,
  FormGroup, Input, Label} from 'reactstrap'
import styled from 'styled-components'
import {MdAddCircle} from 'react-icons/md'
import {FaPencilAlt,FaTrash} from 'react-icons/fa'
import Navbar from '../../component/Navbar'

import {connect} from 'react-redux'
import {showSchedule} from '../../Redux/actions/admin/Schedule'


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
      sortCondition: true
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
  }
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
