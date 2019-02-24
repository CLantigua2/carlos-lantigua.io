import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Card = ({ site, image, header, tech, code, alt }) => (
  <li>
    <Cadence href={site} target="blank" rel="noopener noreferrer">
      <Fade bottom duration={1000}>
        <img className="cadence-img" src={image} alt={alt} />
      </Fade>
    </Cadence>
    <Fade bottom duration={1200}>
      <h3>{header}</h3>
    </Fade>
    <Fade bottom duration={1500}>
      <p>{tech}</p>
    </Fade>
    <Fade bottom duration={1800}>
      <a href={code} target="blank" rel="noopener noreferrer">
        See The Code
      </a>
    </Fade>
  </li>
)

export default Card

const Cadence = styled.a`
  text-decoration: none;
  border-bottom: none;
  .cadence-img {
    border: 1px solid rgb(150, 150, 150);
    background: linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
    box-shadow: 7px 7px 21px -5px rgba(0, 0, 0, 0.23);
    border-radius: 5px;
    width: 100%;
    margin-bottom: 50px;
  }
`
