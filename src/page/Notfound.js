import React, { Component } from 'react'
import styled from 'styled-components'
import NotFound from '../image/Notfound.png'
import {Link} from 'react-router-dom'


const Div = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background-size: cover;
`

const Image = styled('img')`
width: 450px;
height: 400px;`

const CustomLink = styled(Link)`
font-weight: bold;
color: black;
text-decoration: underline;`





export default class Notfound extends Component {
  render() {
    return (
      <>
          <Div>
            <h1>Opss... Page not found</h1>
            <Image src={NotFound} alt='not-found'/>
            <CustomLink to='/dashboard'>Back to home</CustomLink>
          </Div>
      </>
    )
  }
}
