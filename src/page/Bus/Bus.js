// styling
import React, { Component} from 'react'
import Navbar from '../../component/Navbar'
import {Container, Col, Table, Form, Button,
   FormGroup, Input, Label} from 'reactstrap'
import styled from 'styled-components'
import {IoMdAddCircle} from 'react-icons/io'
import {FaPencilAlt, FaTrash} from 'react-icons/fa'

// redux
import {getBus, deleteBus} from '../../Redux/actions/admin/Buss'
import {GetDataAgent} from '../../Redux/actions/admin/Agent'
import {connect} from 'react-redux'

// component
import AddBus from './AddBus'
import UpdateBus from './UpdateBus'

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
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      updateModal: false,
      dropdownOpen: false,
      currentPage: 1,
      sort: 0,
      sortCondition: true,
      sortKey: '',
      searchKey:'',
      search:'',
      disableNext: false,
      disablePrev: false
    }
    this.toggle = () => this.setState({modal: !this.state.modal })
    this.toggleUpdate = () => this.setState({updateModal: !this.state.updateModal})

    this.handleSort = (field) => {
      const sort = this.state.sort ? this.state.sort - 1 : this.state.sort + 1
      console.log(sort)
      this.props.getBus(this.props.Bus.data.pageInfo.page, this.state.searchKey, this.state.search, field, parseInt(sort))
      this.setState({
        sort: sort,
        sortCondition: !this.state.sortCondition
      })
    }

    this.handleSearch = (e) => {
      this.setState({
        search: e.target.value
      })
      this.props.getBus(this.props.Bus.data.pageInfo.page, this.state.searchKey, e.target.value, this.state.sortKey, parseInt(this.state.sort))
    }
  }

  createAlert = () => {
   alert('halo')
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
                      <Input type="text" name="search" id="searching" placeholder="Enter car's name" onChange={this.handleSearch}/>
                    </Col>
                  </FormGroup>
                </Form>
                <CustomTable>
                  <thead>
                    <th>No</th>
                    <th onClick={()=>this.handleSort('car_name')} style={{cursor: 'pointer'}}>Car's name</th>
                    <th onClick={()=>this.handleSort('bus_seat')} style={{cursor: 'pointer'}}>Seat</th>
                    <th >Option</th>
                  </thead>
                  <tbody>
                  { this.props.Bus.data.data && this.props.Bus.data.data.map((v,i)=>{
                      return (
                        <tr>
                          <th scope='row' key = { i }>{ i + 1} </th>
                          <td>{v.car_name}</td>
                          <td>{v.bus_seat}</td>
                          <td>
                              <Icons onClick={this.toggleUpdate}><FaPencilAlt/></Icons>
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
            
        </Content>
        <AddBus modal={this.state.modal} close={()=>this.setState({modal: false})} />
        <UpdateBus updateModal={this.state.updateModal} close={()=>this.setState({updateModal: false})} update={this.createAlert} />
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
