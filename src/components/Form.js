import React from 'react'
import styled from 'styled-components'
const Form = () => (
  <section>
    <header className="major">
      <h2>Contact Me</h2>
    </header>
    <StyledForm
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
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
            placeholder="ex. brucethedev@email.com"
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 500px;
  text-align: left;
  p {
    min-width: 500px;
  }
`
