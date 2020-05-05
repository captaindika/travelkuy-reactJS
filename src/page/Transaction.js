import React, { Component } from 'react'
import {Container, Col, Table, Form,
  FormGroup, Input, Label} from 'reactstrap'
import styled from 'styled-components'
import {MdAddCircle} from 'react-icons/md'
import {FaPencilAlt,FaTrash} from 'react-icons/fa'
import Navbar from '../component/Navbar'

import {connect} from 'react-redux'
import {getTrans} from '../Redux/actions/admin/Transactions'

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

class Transaction extends Component {
  componentDidMount() {
    this.props.getTrans()
    console.log('ini transaction', this.props.Transaction)
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
                    <th>Id Transaction</th>
                    <th>Id User</th>
                    <th>Id Schedule</th>
                    <th>Created At</th>
                    {/* <th>Options</th> */}
                  </thead>
                  <tbody>
                  { this.props.Transaction.data.data && this.props.Transaction.data.data.map((v,i)=>{
                        return (
                          <tr>
                            <th scope='row' key = { i }>{ i + 1} </th>
                            <td>{v.id}</td>
                            <td>{v.id_user}</td>
                            <td>{v.id_schedule}</td>
                            <td>{v.created_at.slice(0,10)}</td>
                            {/* <td>
                              <Icons><FaPencilAlt/></Icons>
                              <Icons><FaTrash/></Icons>
                            </td> */}
                          </tr>
                        )
                      })
                    }                  
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
    Transaction: state.Transactions
  }
}
const mapDispatchToProps = {getTrans}
export default connect(mapStateToProps, mapDispatchToProps) (Transaction)
