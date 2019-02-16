import React from 'react'
import styled from 'styled-components'

const Tech = () => (
  <ul className="statistics">
    <Icons className="style1">
      <i className="fab fa-js-square" />
      JavaScript
    </Icons>
    <Icons className="style2">
      <i className="fab fa-react" />
      ReactJS
    </Icons>
    <Icons className="style3">
      <i className="fab fa-node" />
      NodeJS
    </Icons>
    <Icons className="style4">
      <i class="fab fa-python" />
      Python
    </Icons>
    <Icons className="style5">
      <i className="fas fa-code-branch" />
      Git
    </Icons>
  </ul>
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
`
