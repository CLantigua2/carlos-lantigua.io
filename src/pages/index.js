import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import styled from 'styled-components'
import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import carlos from '../assets/images/Carlos.jpg'
import Tech from './Tech'
import Form from '../components/Form'
import cardData from '../components/cardData'
import Card from '../components/Card'
import Fade from 'react-reveal/Fade'
import config from 'react-reveal/globals'

config({ ssrFadeout: true })

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      cardData: null,
    }
  }
  componentDidMount() {
    this.setState({ cardData })
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    const { cardData, stickyNav } = this.state

    return (
      <Layout>
        <Helmet />
        <title>Carlos Lantigua | Portfolio</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Behind the code..</h2>
                </header>
                <Fade bottom>
                  <p>
                    I am a Marine veteran and skilled programmer that enjoys
                    coming together with a team to find solutions for complex
                    problems. I began self-learning for a year in 2017 before
                    enrolling into Lambda Schools immersive Full Stack Web and
                    Computer Science program. During my Time at Lambda School I
                    completed and deployed live projects and worked on the team
                    of engineers that deployed the employee shift scheduler
                    Cadence. I also worked as a part time Project Manager during
                    the evening to mentor students, review code, go over daily
                    code challenges, assessment of mastery, and one on one
                    sessions.
                  </p>
                </Fade>
              </div>
              <Fade bottom>
                <span className="image">
                  <img src={carlos} alt="creator avatar" />
                </span>
              </Fade>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>My Projects</h2>
            </header>
            <Fade bottom>
              <ul className="features">
                {cardData &&
                  cardData.map((card, i) => {
                    return (
                      <Card
                        key={i}
                        site={card.site}
                        image={card.image}
                        header={card.header}
                        alt={card.image}
                        body={card.body}
                        tech={card.tech}
                        code={card.code}
                      />
                    )
                  })}
              </ul>
            </Fade>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Linked
                    href="https://github.com/CLantigua2/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github" style={{ fontSize: '35px' }} />
                  </Linked>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>The Tech...</h2>
            </header>
            <Fade bottom>
              <Tech />
            </Fade>
            <Fade bottom>
              <Form />
            </Fade>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Fade bottom>
                    <Link to="/generic" className="button">
                      About Me
                    </Link>
                  </Fade>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

const Linked = styled.a`
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 300;
  height: 3.75em;
  line-height: 2.75em;
  min-width: 4.25em;
  border-radius: 32%;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  box-shadow: 0 0 0 1px #dddddd;
  color: #636363;
  transition: all 0.3s ease-in-out;
  :hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 200, 0.5);
  }
`
