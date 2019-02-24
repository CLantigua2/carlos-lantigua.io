import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'
import { Link } from 'gatsby'
const Header = () => {
  const list = [
    {
      site: 'Github',
      linkto: 'https://github.com/CLantigua2',
    },
    {
      site: 'LinkedIn',
      linkto: 'https://www.linkedin.com/in/carlos-lantigua/',
    },
    {
      site: 'YouTube',
      linkto: 'https://www.youtube.com/channel/UCdqrDHyv3IMnilJBjFTbK0g',
    },
    {
      site: 'Twitter',
      linkto: 'https://twitter.com/CodeLantigua',
    },
  ]
  return (
    <header id="header" className="alt">
      <StyledLink to="/" title="Home">
        <img src={logo} alt={logo} />
      </StyledLink>
      <p>Full Stack Web Developer</p>
      <br />
      <Container>
        {list.map((list, i) => (
          <div key={i}>
            <a href={list.linkto} target="_blank" rel="noopener noreferrer">
              {list.site}
            </a>
          </div>
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
const StyledLink = styled(Link)`
  text-decoration: none;
  border: none;
`
