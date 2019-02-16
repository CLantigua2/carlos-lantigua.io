import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'

const Header = () => {
  const list = [
    'React',
    'Express',
    'Node',
    'JavaScript',
    'Python',
    'MongoDb',
    'SQL',
  ]
  return (
    <header id="header" className="alt">
      {/* <h1>Carlos Lantigua</h1> */}
      <img src={logo} />
      <p>Full Stack Web Developer</p>
      <br />
      <Container>
        {list.map(list => (
          <p key={list}>{list}</p>
        ))}
      </Container>
    </header>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`
