import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Footer = () => (
  <FooterContainer id="footer" data-aos="fade-up">
    <section>
      <Fade bottom duration={2000} delay={1000}>
        <h2>Want to see what else I build?</h2>
        <p>
          Click the link below to checkout my GitHub. <br />I can be reached
          through either Linkedin, <br />
          Twitter or Github.
        </p>
        <ul className="actions">
          <li>
            <a
              href="https://github.com/CLantigua2"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              My GitHub
            </a>
          </li>
        </ul>
      </Fade>
    </section>
    <section>
      <Fade bottom duration={2000} delay={1000}>
        <h2>Want to reach out?</h2>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/CodeLantigua"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-twitter alt"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCdqrDHyv3IMnilJBjFTbK0g"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-youtube alt"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/carlos-lantigua/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-linkedin alt"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CLantigua2"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-github alt"
            >
              <span className="label">Github</span>
            </a>
          </li>
        </ul>
      </Fade>
    </section>
    <p className="copyright">&copy; Carlos Lantigua.</p>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
  margin: 0;
`
