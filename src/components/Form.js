import React from 'react'
import styled from 'styled-components'
const Form = () => (
  <section>
    <header className="major">
      <h2>Contact Me</h2>
    </header>
    <StyledForm name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name:{' '}
          <input type="text" name="name" placeholder="ex. Bruce Dwayne" />
        </label>
      </p>
      <p>
        <label>
          Your Email:{' '}
          <input
            type="email"
            name="email"
            placeholder="ex. brucethedev@gmail.com"
          />
        </label>
      </p>

      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </StyledForm>
  </section>
)

export default Form

const StyledForm = styled.form`
  width: 500px;
  text-align: left;
`
