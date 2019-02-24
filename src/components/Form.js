import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Form = () => (
  <section>
    <header className="major">
      <h2>Contact Me</h2>
    </header>

    <Fade bottom duration={1000} delay={500}>
      <StyledForm
        data-aos="fade-up"
        name="contact"
        method="post"
        netlify="true"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <p>
          <label>
            Your Name:{' '}
            <input
              type="text"
              name="name"
              placeholder="ex. Bruce Dwayne"
              action="/success"
            />
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
    </Fade>
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
    min-width: 300px;
  }
  @media only screen and (max-width: 500px) {
    min-width: 300px;
    align-items: none;
    text-align: left;
    p {
      min-width: 300px;
      font-size: 20px;
    }
  }
`
