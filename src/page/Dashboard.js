import React, { Component } from 'react'
import {Container,Row,Col,
  Toast, ToastBody, ToastHeader, Modal} from 'reactstrap'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {FaCarAlt, FaRoute} from 'react-icons/fa'
import {MdSchedule} from 'react-icons/md'
import {AiOutlineTransaction} from 'react-icons/ai'
import Navbar from '../component/Navbar'
import {getBus} from '../Redux/actions/admin/Buss'
import {showRoutes} from '../Redux/actions/admin/Route'
import {showSchedule} from '../Redux/actions/admin/Schedule'
import {getTrans} from '../Redux/actions/admin/Transactions'


const Column = styled(Col)`
background-color: #E5E2DA;`

const Symetris = styled.span`
display: inline;
width: 100px;
padding: 5px;
`


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false };
  }

  async componentDidMount() {
    await this.props.getBus()
    await this.props.showRoutes()
    await this.props.showSchedule()
    await this.props.getTrans()
    console.log(localStorage.getItem('token'))
  }
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
                  Total cars : {this.props.Bus.data.pageInfo && this.props.Bus.data.pageInfo.totalData}
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
                Total Routes : {this.props.Routes.data.pageInfo && this.props.Routes.data.pageInfo.totalData}
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
                Total schedules : {this.props.Schedules.data.pageInfo && this.props.Schedules.data.pageInfo.totalData}
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
                  Total Transactions : {this.props.Transactions.data.pageInfo && this.props.Transactions.data.pageInfo.totalData}
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

const mapStateToProps = state => {
  return {
    Bus: state.Busses,
    Routes: state.Routes,
    Schedules: state.Schedules,
    Transactions: state.Transactions
  }
}

export default connect(mapStateToProps, {getBus, showRoutes, showSchedule, getTrans}) (Dashboard)
