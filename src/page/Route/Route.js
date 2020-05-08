import React, { Component } from 'react'
import {Container, Col, Table, Form,
  FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink} from 'reactstrap'
import styled from 'styled-components'
import {MdAddCircle} from 'react-icons/md'
import {FaPencilAlt, FaTrash, FaSearch, FaSortAmountDown, FaSortAmountUp} from 'react-icons/fa'
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
height: 120vh;
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
      updateModal: false,
      currentPage: 1,
      sort: 0,
      sortKey:'',
      searchKey:'',
      search:'',
      disableNext: false,
      disablePrev: false,
      sortCondition: true,
      idRoute: 0
    }
    this.toggle = () => this.setState({modal: !this.state.modal})
    this.updateToggle = (e) => {
      this.setState({
        updateModal: !this.state.updateModal,
        idRoute: e
      })
    }
    this.nextPage = async (e) => {
      e.preventDefault()
      const {page, totalPage} = await this.props.Route.data.pageInfo
      await this.props.showRoutes(page)
      this.props.showRoutes(page + 1, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
      if (page !== totalPage -1 ) {
        this.setState({
          disableNext: false
        })
      } else if (page === totalPage - 1) {
        this.setState({
          disableNext: !this.state.disableNext
        })
      }
    }
    this.prevPage = async (e) => {
      e.preventDefault()
      const { page } = await this.props.Route.data.pageInfo
      await this.props.showRoutes(page)
      await this.props.showRoutes(page - 1, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
      if (page !== 1 ) {
        this.setState({
          disablePrev: false
        })
      } else if (page === 1) {
        this.setState({
          disablePrev: !this.state.disablePrev
        })
      }
    }
     
    this.handleSort = (field) => {
        const sort = this.state.sort ? this.state.sort - 1 : this.state.sort + 1
        console.log(sort)
        this.props.showRoutes(this.props.Route.data.pageInfo.page, this.state.searchKey, this.state.search, field, parseInt(sort))
        this.setState({
          sort: sort,
          sortCondition: !this.state.sortCondition
        })
      }
    
    this.setPage = (e) => {
      e.preventDefault()
      this.props.showRoutes(e.target.textContent, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
    }

    this.onHandleChange = async (e) => {
      this.setState({
        sortKey: e.target.value,
        searchKey: e.target.value
      })
      if (this.state.searchKey.length <1) {
        await this.props.showRoutes(this.props.Route.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
        if(!this.state.sortCondition) {
          this.setState({
            sort: 1,
            sortIcon: <FaSortAmountUp />
          })
          await this.props.showRoutes(this.props.Route.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
        } else {
          this.setState({
            sort: 0,
            sortIcon: <FaSortAmountDown />
          })
          await this.props.showRoutes(this.props.Route.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
        }
      }
    }

    this.handleSearch = (e) => {
      this.setState({
        search: e.target.value
      })
      this.props.showRoutes(this.props.Route.data.pageInfo.page, this.state.searchKey, e.target.value, this.state.sortKey, parseInt(this.state.sort))
    }
  }
  async componentDidMount() {
    this.props.showRoutes()
  }
  render() {
    console.log(this.props.Route)
    const page = []
    const disablePage = []
    const totalPage = this.props.Route.data.pageInfo && this.props.Route.data.pageInfo.totalPage
    for (let index = 0; index < totalPage; index++) {
      page.push(<PaginationItem key={index}> <PaginationLink onClick={this.setPage} href='#'>{index + 1} </PaginationLink></PaginationItem>)
    }
    return (
      <>
      <Navbar/>
        <Content>
            <Col md={9}>
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
                    <th onClick={()=>this.handleSort('start')} style={{cursor: 'pointer'}}>From</th>
                    <th onClick={()=> this.handleSort('end')} style={{cursor: 'pointer'}}>Destination </th>
                    <th>Options</th>
                  </thead>
                  <tbody>
                    { this.props.Route.data.data && this.props.Route.data.data.map((v,i)=>{
                      const { page, perPage } = this.props.Route.data.pageInfo
                        return (
                          <tr>
                            <th scope='row' key = { i }> {((page - 1) * perPage) + (i + 1) } </th>
                            <td>{v.start}</td>
                            <td>{v.end}</td>
                            <td>
                                <Icons onClick={()=>this.updateToggle(v.id)} style={{cursor: 'pointer'}}><FaPencilAlt/></Icons>
                                <Icons onClick={()=> this.props.deleteRoutes(v.id)} style={{cursor: 'pointer'}}><FaTrash/></Icons>
                            </td>
                          </tr>
                        )
                      })
                    }                  
                    <UpdateRoute  idRoute={this.state.idRoute} updateModal={this.state.updateModal} close={()=>this.setState({updateModal: false})} />
                  <RowAdd>
                    <td colspan={4}>
                      <span onClick={this.toggle} style={{cursor: 'pointer'}}><MdAddCircle size={30}/>Add Route</span>
                    </td>
                  </RowAdd>
                  </tbody>
                </Tablemid>
                <Pagination size="lg" aria-label="Page navigation example" style={{display: 'flex', justifyContent: 'center'}}>
                <PaginationItem>
                  <PaginationLink disabled={this.state.disablePrev} onClick={this.prevPage} previous />
                </PaginationItem>
                  {page}
                <PaginationItem>
                  <PaginationLink disabled={this.state.disableNext} onClick={this.nextPage} next/>
                </PaginationItem>
              </Pagination>
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