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
  DropdownItem
} from 'reactstrap';
import {MdCardTravel, MdAccountCircle, MdSchedule} from 'react-icons/md'
import {AiOutlineTransaction} from 'react-icons/ai'
import {FaCarAlt, FaRoute} from 'react-icons/fa'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setLogout} from '../Redux/actions/isLogin'


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
      isOpen: false
    }
    this.toggle = () => {
      this.setState({isOpen: true})
    }
  }

  logout = () => {
    this.props.setLogout()
  }
  render() {
    // console.log('seeeeeeeeeeeeee',this.props)
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
                <MdAccountCircle size={32} onClick={this.logout}/>
          </Navitem>
        </Collapse>
      </Navibar>
      </>
    )
  }
}
)