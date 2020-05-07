import React, { Component } from 'react'
import {
  Collapse,
  Navbar as NavigationBar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import {MdCardTravel, MdAccountCircle, MdSchedule} from 'react-icons/md'
import {AiOutlineTransaction} from 'react-icons/ai'
import {FaCarAlt, FaRoute} from 'react-icons/fa'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setLogout} from '../Redux/actions/isLogin'
import {connect} from 'react-redux'


const Navitem = styled(NavItem)`
display: flex;
justify-content: flex-end;
`

const Navibar = styled(NavigationBar)`
background-color: #7AF8FA !important;`

const BrandNav = styled(NavbarBrand)`
display: flex !important;
align-items: center;
width: 150px;
justify-content: space-around;
`

const Bartitle = styled('span')`
color: #1271AF;
font-weight: bold;`

const Symetris = styled.span`
display: inline;
width: 100px;
padding: 5px;
`

const CustomLink = styled(Link)`
color: black;`

const mapStateToProps = (state) => {
  return {
    Login: state.isLogin
  }
}
export default connect(mapStateToProps, {setLogout})(class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      modal: false,
      name: '',

    }
    this.toggle = () => {
      this.setState({isOpen: true})
    }

    this.toggleAccount = () => this.setState({dropdownOpen: !this.state.dropdownOpen})
    this.toggleModal = () => this.setState({modal: !this.state.modal})
  }

  logout = () => {
    this.props.setLogout()
  }
  render() {
    return (
      <>
        <Navibar color="dark" light expand="md">
        <BrandNav >
          <MdCardTravel size={25} color={'#1271AF'}/>
          <Bartitle>YXG Kuy !</Bartitle>
        </BrandNav>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/dashboard"><b>Home</b></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <b>Management</b>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <CustomLink to='/car'>
                    <Symetris><FaCarAlt size={17}/></Symetris>
                    <Symetris>Car</Symetris>
                  </CustomLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <CustomLink to='/schedule'>
                    <Symetris><MdSchedule size={17}/></Symetris>
                    <Symetris>Schedule</Symetris>
                  </CustomLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <CustomLink to='/route'>
                    <Symetris><FaRoute size={17}/></Symetris>
                    <Symetris>Route</Symetris>
                  </CustomLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <CustomLink to='/transaction'>
                    <Symetris><AiOutlineTransaction size={17}/></Symetris>
                    <Symetris>Transaction</Symetris>
                  </CustomLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Navitem 
            style={{cursor: 'pointer'}}>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleAccount}>
                  <DropdownToggle caret>
                    <MdAccountCircle size={32} />
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem header>Profil</DropdownItem>
                    <DropdownItem onClick={this.toggleModal}>Update Profile</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.logout}>Log out</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
          </Navitem>
        </Collapse>
      </Navibar>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Update Profile</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for='fullName'>Full Name</Label>
                <Input placeholder='full name' id='fullName'/>
              </FormGroup>
              <FormGroup>
              <Label for='email'>Email</Label>
                <Input placeholder='email' id='email'/>
              </FormGroup>
              <FormGroup>
              <Label for='phone'>Phone</Label>
                <Input placeholder='phone' id='phone'/>
              </FormGroup>
              <FormGroup>
                <Label for='photo'>Upload Photo</Label>
                <Input type='file' name='picture' id='photo'/>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleModal}>Update</Button>{' '}
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    )
  }
}
)