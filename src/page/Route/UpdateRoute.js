import React, { Component } from 'react'
import {
  Modal, ModalHeader, Label, FormGroup, Input, ModalBody, ModalFooter, Button
} from 'reactstrap'
import {connect} from 'react-redux'
import {UpdateRoutes} from '../../Redux/actions/admin/Route'
import styled from 'styled-components'
import {FaPencilAlt} from 'react-icons/fa'

const Icons = styled.span`
display: inline;
width: 100px;
padding: 5px;
`

class UpdateBus extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: 0,
      start: '',
      end: '',
      updateModal: false
    }
    this.onHandleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    this.onUpdate = (e) => {
      e.preventDefault()
      const data = {
        start: this.state.start,
        end: this.state.end
      }
      console.log(data)
      this.props.UpdateRoutes(this.props.id, data)
    }

    this.updateToggle = () => this.setState({updateModal: !this.state.updateModal})
  }
  render() {
    console.log(this.props.id)
    return (
      <>
        <div>
        <Icons onClick={this.updateToggle} style={{cursor: 'pointer'}}><FaPencilAlt/></Icons>
              <Modal isOpen={this.state.updateModal} className={this.className}>
                <ModalHeader >Update Route</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for='start'>Start</Label>
                    <Input type='text' name='start' id='start' placeholder='start' value={this.state.start} onChange={this.onHandleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for='end'>End</Label>
                    <Input type='text' name='end' id='end' placeholder='end' value={this.state.end} onChange={this.onHandleChange}/>
                  </FormGroup> 
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.onUpdate}>Update</Button>
                  <Button color="secondary" onClick={this.props.close}>Cancel</Button>
                </ModalFooter>
              </Modal>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Route: state.Routes
  }
}

const mapDispatchToProps = {UpdateRoutes}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateBus)