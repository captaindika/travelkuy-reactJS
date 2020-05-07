import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'
import {FaFacebook, FaGithub} from 'react-icons/fa'
import {TiSocialInstagram} from 'react-icons/ti'
import styled from 'styled-components'

const Column = styled(Col)`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
`

const Rows = styled(Row)`
height: 60px;`

const Font = styled('a')`
font-size: 18px;
font-weight: bold;
padding: 5px 7px;
color: black;`

const Content = styled(Container)`
position: fixed !important;
bottom: 0 !important;
height: 90px;
background-color: #F6F9A9;
`

export default class Footer extends Component {
  render() {
    return (
      <>
        <Content fluid={true}>
          <Rows>
            <Column md={12}>
              <span><FaFacebook size={30} color ='#3b5998'/><Font href='#'>Follow on facebook</Font></span>
              <span><FaGithub size={30}/><Font href='#'>Follow on github</Font></span>
              <span><TiSocialInstagram size={30} color='#3f729b'/><Font href='#'>Follow on instagram</Font></span>
            </Column>
          </Rows>
          <Row>
            <Column md={12}>
              <Font>Copyright&copy;2020</Font>
            </Column>
          </Row>
        </Content>
      </>
    )
  }
}
