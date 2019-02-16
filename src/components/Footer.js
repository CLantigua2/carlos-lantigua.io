import React from 'react'
import { Link } from 'gatsby'

const Footer = props => {
  return (
    <footer id="footer">
      <section>
        <h2>Want to see what else I build?</h2>
        <p>
          Click the link below to checkout my github. I can be reached through
          either Linkedin, twitter or github.
        </p>
        <ul className="actions">
          <li>
            <a
              href="https://www.linkedin.com/in/carlos-lantigua/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              My GitHub
            </a>
          </li>
        </ul>
      </section>
      <section>
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
      </section>
      <p className="copyright">&copy; Carlos Lantigua.</p>
    </footer>
  )
}
export default Footer
