import React, { Component } from 'react'
import {Container, Col, Table, Form,
  FormGroup, Input, Label} from 'reactstrap'
import styled from 'styled-components'
import {MdAddCircle} from 'react-icons/md'
import {FaPencilAlt, FaTrash} from 'react-icons/fa'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import AddRoute from '../Route/AddRoute'
import UpdateRoute from '../Route/UpdateRoute'

import {showRoutes, deleteRoutes} from '../../Redux/actions/admin/Route'
import {connect} from 'react-redux'

const Content = styled(Container)`
display: flex;
justify-content: center;
margin-top: 20px;
`
const RowAdd = styled.tr`
text-align: left;`

const Tablemid = styled(Table)`
text-align: center;
font-weight: bold;
`

const Icons = styled.span`
display: inline;
width: 100px;
padding: 5px;
`

const Label1 = styled(Label)`
font-weight: bold;
`

class Routes extends Component {
  constructor(props){
    super(props)
    this.state={
      modal: false,
      updateModal: false
    }
    this.toggle = () => this.setState({modal: !this.state.modal})
    this.updateToggle = () => this.setState({updateModal: !this.state.updateModal})
    // this.deleteRoute = ()=> {
    //   this.props.deleteRoutes(v.id)
    //   this.props.showRoutes()
    // }
  }
  async componentDidMount() {
    this.props.showRoutes()
  }
  render() {
    return (
      <>
      <Navbar/>
        <Content>
            <Col md={9}>
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
                    <th>Options</th>
                  </thead>
                  <tbody>
                    { this.props.Route.data.data && this.props.Route.data.data.map((v,i)=>{
                        return (
                          <tr>
                            <th scope='row' key = { i }>{ i + 1} </th>
                            <td>{v.start}</td>
                            <td>{v.end}</td>
                            <td>
                              <Icons onClick={this.updateToggle} style={{cursor: 'pointer'}}><FaPencilAlt/></Icons>
                              <Icons onClick={()=>this.props.deleteRoutes(v.id)} style={{cursor: 'pointer'}}><FaTrash/></Icons>
                            </td>
                            <UpdateRoute updateModal={this.state.updateModal} close={()=>this.setState({updateModal: false})} id={`${v.id}`} />
                          </tr>
                        )
                      })
                    }                  
                  <RowAdd>
                    <td colspan={4}>
                      <span onClick={this.toggle} style={{cursor: 'pointer'}}><MdAddCircle size={30}/>Add Route</span>
                    </td>
                  </RowAdd>
                  </tbody>
                </Tablemid>
            </Col>
        </Content>       
      <Footer/>
      <AddRoute modal={this.state.modal} close={()=>this.setState({modal: false})} add={()=>alert('add')}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Route: state.Routes
  }
}
const mapDispatchToProps = {showRoutes, deleteRoutes}
export default connect(mapStateToProps, mapDispatchToProps) (Routes)