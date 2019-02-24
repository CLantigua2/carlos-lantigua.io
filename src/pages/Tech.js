import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Tech = () => (
  <Fade bottom duration={1000}>
    <ul className="statistics" data-aos="fade-up">
      <Icons className="style1">
        <i className="fab fa-js-square" />
        <p>JavaScript</p>
      </Icons>
      <Icons className="style2">
        <i className="fab fa-react" />
        <p>ReactJS</p>
      </Icons>
      <Icons className="style3">
        <i className="fab fa-node" />
        <p>NodeJS</p>
      </Icons>
      <Icons className="style4">
        <i className="fab fa-python" />
        <p>Python</p>
      </Icons>
      <Icons className="style5">
        <i className="fas fa-code-branch" />
        <p>Git</p>
      </Icons>
    </ul>
  </Fade>
)

export default Tech

const Icons = styled.li`
  display: flex;
  flex-direction: column;

  height: 100%;
  i {
    font-size: 50px;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
  }
`
