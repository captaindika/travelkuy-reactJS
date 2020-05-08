import React, { Component } from 'react'
import {
  Modal, ModalHeader, Label, FormGroup, Input, ModalBody, ModalFooter, Button
} from 'reactstrap'
import {connect} from 'react-redux'
import {GetDataAgent} from '../../Redux/actions/admin/Agent'
import {updateBus, getBus} from '../../Redux/actions/admin/Buss'
import styled from 'styled-components'
import {FaPencilAlt} from 'react-icons/fa'

const Icons = styled.span`
display: inline;
width: 100px;
padding: 5px;
`

class UpdateBus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idAgent: 0,
      nameBuss: '',
      busSeat: 0,
      idBus: this.props.idBus
    }
    
    this.onHandleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    this.setIdAgent = (e) => {
      this.setState({
        idAgent: e.target.value
      })
    }

    this.onUpdate = (e) => {
      e.preventDefault()
      const data = {
        nameBuss: this.state.nameBuss,
        busSeat: this.state.busSeat,
        idAgent: this.state.idAgent
      }
      console.log(data)
      this.props.updateBus(this.props.idBus, data)
      this.props.getBus()
    }

    
  }
  render() {
    console.log('semua props', this.props)
    return (
      <>
        <div>
          
              <Modal isOpen={this.props.updateModal} className={this.className}>
                <ModalHeader >Update Bus</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for='agent'>Agent's name #ID {this.props.idBus}</Label>
                    <Input type='select' name='idAgent' id='agent' onChange={this.setIdAgent}>
                      {this.props.Agent.data.data && this.props.Agent.data.data.map((v,i) => {
                        return (
                          <option key={i} value={v.id}>{v.name}</option>
                        )
                      })}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input type='text' name='nameBuss' placeholder='bus name' value={this.state.nameBuss} onChange={this.onHandleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Input type='number' name='busSeat' min={0} max={20} placeholder='Seat quota' value={this.state.busSeat} onChange={this.onHandleChange}/>
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
    Agent: state.Agent,
    Bus: state.Busses
  }
}

const mapDispatchToProps = {GetDataAgent, updateBus, getBus}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateBus)