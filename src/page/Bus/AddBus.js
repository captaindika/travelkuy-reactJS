import React, { Component } from 'react'
import {
  Modal, ModalHeader, Label, FormGroup, Input, ModalBody, ModalFooter, Button
} from 'reactstrap'
import {connect} from 'react-redux'
import history from '../../utils/History'
import {GetDataAgent} from '../../Redux/actions/admin/Agent'
import {addBus} from '../../Redux/actions/admin/Buss'

class AddBus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameBuss: '',
      busSeat: 0,
      idAgent:0
    }
    this.onHandleChange = async (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    this.setIdAgent = (e) => {
      this.setState({
        idAgent: e.target.value
      })
    }

    this.onCreate = async (e) => {
      e.preventDefault()
      const data = {
        idAgent: this.state.idAgent,
        nameBuss: this.state.nameBuss,
        busSeat: this.state.busSeat
      }
      await this.props.addBus(data).then(async () => {
        this.props.close()
        history.push('/car')
      })
    }
  }
  render() {
    console.log(this.state)
    return (
      <>
        <div>
              <Modal isOpen={this.props.modal} className={this.className}>
                <ModalHeader >Add Bus</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for='agent'>Agent's name</Label>
                    <Input type='select' name='idAgent' id='agent' onChange={this.setIdAgent}>
                      {this.props.Agent.data.data && this.props.Agent.data.data.map((v,i) => {
                        return (
                          <option key={i} value={v.id}>{v.name}</option>
                        )
                      })}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input type='text' name='nameBuss' placeholder='bus name' onChange={this.onHandleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Input type='number' min={0} max={20} name='busSeat' placeholder='Seat quota' onChange={this.onHandleChange}/>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.onCreate}>Add</Button>
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
    Agent: state.Agent,
    Bus: state.Busses
  }
}

const mapDispatchToProps = {GetDataAgent, addBus}
export default connect(mapStateToProps, mapDispatchToProps)(AddBus)