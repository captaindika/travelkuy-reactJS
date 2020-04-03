import React, { Component } from 'react'
import {Container,Row,Col,
  Toast, ToastBody, ToastHeader} from 'reactstrap'
import styled from 'styled-components'
import {FaCarAlt, FaRoute} from 'react-icons/fa'
import {MdSchedule} from 'react-icons/md'
import {AiOutlineTransaction} from 'react-icons/ai'
import Navbar from '../component/Navbar'


const Column = styled(Col)`
background-color: #E5E2DA;`

const Symetris = styled.span`
display: inline;
width: 100px;
padding: 5px;
`


export default class Dashboard extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <Container>
          <Row>
            <Col md={3}>
            <div className="p-3 my-3 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastHeader>
                  <Symetris>Cars</Symetris>
                  <Symetris><FaCarAlt size={20}/></Symetris>
                </ToastHeader>
                <ToastBody>
                  This will show total cars
                </ToastBody>
              </Toast>
            </div>
            </Col>
            <Col md={3}>
            <div className="p-3 my-3 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastHeader>
                  <Symetris>Routes</Symetris>
                  <Symetris><FaRoute size={20}/></Symetris>
                </ToastHeader>
                <ToastBody>
                  This will show total routes
                </ToastBody>
              </Toast>
            </div>
            </Col>
            <Col md = {3}>
            <div className="p-3 my-3 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastHeader>
                  <Symetris>Schedules</Symetris>
                  <Symetris><MdSchedule size={20}/></Symetris>
                </ToastHeader>
                <ToastBody>
                  This will show total schedules
                </ToastBody>
              </Toast>
            </div>
            </Col>
            <Col md={3}>
            <div className="p-3 my-3 rounded bg-docs-transparent-grid">
              <Toast>
                <ToastHeader>
                  <Symetris>Transactions</Symetris>
                  <Symetris><AiOutlineTransaction size={20}/></Symetris>
                </ToastHeader>
                <ToastBody>
                  This will show total transactions
                </ToastBody>
              </Toast>
            </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
