import React, { Component } from 'react'
import {
  Modal, ModalHeader, Label, FormGroup, Input, ModalBody, ModalFooter, Button
} from 'reactstrap'
import {connect} from 'react-redux'
import {UpdateRoutes, showRoutes} from '../../Redux/actions/admin/Route'

class updateRoute extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: 0,
      start: '',
      end: ''
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
      this.props.UpdateRoutes(this.props.idRoute, data)
      this.props.showRoutes()
      this.props.close()
      // history.push('/route')
      // this.renderRedirect()
    }

  }
  render() {
    return (
      <>
        <div>
              <Modal isOpen={this.props.updateModal} className={this.className}>
                <ModalHeader >Update Route#{this.props.idRoute}</ModalHeader>
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

const mapDispatchToProps = {UpdateRoutes, showRoutes}
export default connect(mapStateToProps, mapDispatchToProps)(updateRoute)