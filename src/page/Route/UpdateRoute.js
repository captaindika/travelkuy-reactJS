import React, { Component } from 'react'
import {
  Modal, ModalHeader, Label, FormGroup, Input, ModalBody, ModalFooter, Button
} from 'reactstrap'
import {connect} from 'react-redux'
import {UpdateRoutes} from '../../Redux/actions/admin/Route'

class UpdateBus extends Component {
  render() {
    return (
      <>
        <div>
              <Modal isOpen={this.props.updateModal} className={this.className}>
                <ModalHeader >Update Route</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for='start'>Start</Label>
                    <Input type='text' name='start' id='start' placeholder='start'/>
                  </FormGroup>
                  <FormGroup>
                    <Label for='end'>End</Label>
                    <Input type='text' name='name' id='end' placeholder='end'/>
                  </FormGroup> 
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.props.update}>Update</Button>{' '}
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