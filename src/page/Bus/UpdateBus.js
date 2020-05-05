import React, { Component } from 'react'
import {
  Modal, ModalHeader, Label, FormGroup, Input, ModalBody, ModalFooter, Button
} from 'reactstrap'
import {connect} from 'react-redux'
import {GetDataAgent} from '../../Redux/actions/admin/Agent'

class UpdateBus extends Component {
  render() {
    return (
      <>
        <div>
              <Modal isOpen={this.props.updateModal} className={this.className}>
                <ModalHeader >Update Bus</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for='agent'>Agent's name</Label>
                    <Input type='select' name='agent' id='agent'>
                      {this.props.Agent.data.data && this.props.Agent.data.data.map((v,i) => {
                        return (
                          <option>{v.name}</option>
                        )
                      })}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input type='text' name='name' placeholder='bus name'/>
                  </FormGroup>
                  <FormGroup>
                    <Input type='number' min={0} max={20} placeholder='Seat quota'/>
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
    Agent: state.Agent
  }
}

const mapDispatchToProps = {GetDataAgent}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateBus)