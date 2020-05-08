import React, { Component } from 'react'
import {
  Modal, ModalHeader, Label, FormGroup, Input, ModalBody, ModalFooter, Button
} from 'reactstrap'
import {connect} from 'react-redux'
import {CreateRoutes, showRoutes} from '../../Redux/actions/admin/Route'
import {withRouter} from 'react-router-dom'
import history from '../../utils/History'

class AddRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start:'',
      end: ''
    }
    
    this.onAddRoute = (event) => {
      this.setState({
        [event.target.start]: event.target.value
      })
    }
  
    this.onCreate = async (e) => {
      e.preventDefault()
      const data = {
        start: this.state.start,
        end: this.state.end
      }
      await this.props.CreateRoutes(data).then(async () => {
        this.props.showRoutes()
        this.props.close()
        history.push('/route')
      })
    }
  
    this.onHandleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
  }
  render() {
    return (
      <>
        <div>
              <Modal isOpen={this.props.modal} className={this.className}>
                <ModalHeader >Add Route</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for='start'>Start</Label>
                    <Input type='text' name='start' placeholder='start' id='start' onChange={this.onHandleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for='end'>End</Label>
                    <Input type='text' name='end' placeholder='end' id='end' onChange={this.onHandleChange}/>
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
    Route: state.Routes
  }
}

const mapDispatchToProps = {CreateRoutes, showRoutes}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddRoute))