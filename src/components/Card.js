import React from 'react'
import styled from 'styled-components'

const Card = ({ site, image, header, tech, code, alt }) => (
  <li>
    <Cadence href={site} target="blank" rel="noopener noreferrer">
      <img className="cadence-img" src={image} alt={alt} />
    </Cadence>
    <h3>{header}</h3>
    <p>{tech}</p>
    <a href={code} target="blank" rel="noopener noreferrer">
      See The Code
    </a>
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
