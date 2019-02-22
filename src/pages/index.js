import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import styled from 'styled-components'
import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import carlos from '../assets/images/Carlos.jpg'
import cadence from '../assets/images/cadence.gif'
import chatify from '../assets/images/chatify.gif'
import devsocial from '../assets/images/devsocial.gif'
import Tech from './Tech'
import Form from '../components/Form'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
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
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Behind the code..</h2>
                </header>
                <p>
                  I am a Marine veteran and skilled programmer that enjoys
                  coming together with a team to find solutions for complex
                  problems. I began self-learning for a year in 2017 before
                  enrolling into Lambda Schools immersive Full Stack Web and
                  Computer Science program. During my Time at Lambda School I
                  completed and deployed live projects and worked on the team of
                  engineers that deployed the employee shift scheduler Cadence.
                  I also worked as a part time Project Manager during the
                  evening to mentor students, review code, go over daily code
                  challenges, assessment of mastery, and one on one sessions.
                </p>
              </div>
              <span className="image">
                <img src={carlos} alt="creator avatar" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>My Projects</h2>
            </header>
            <ul className="features">
              <li>
                <Cadence
                  href="https://getcadence.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="cadence-img" src={cadence} />
                </Cadence>
                <h3>
                  <a
                    href="https://getcadence.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cadence - Employee Shift Scheduler
                  </a>
                </h3>
                <p>
                  Employers can create organizations then add employees through
                  our emailing service. Once registered, employees can see their
                  weekly schedules and place their PTO Requests. Supervisors can
                  use drag and drop to schedule as well as set their business
                  hours for the week.
                </p>
                <p>
                  ReactJS | Redux | NodeJS | ExpressJS | PostreSQL | Firebase
                  Aauth | StripeApi | React Big Calendar
                </p>
                <a
                  href="https://github.com/Lambda-School-Labs/labs9-employee-scheduler"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  See The Code
                </a>
              </li>

              <li>
                <Cadence
                  href="https://getchatify.netlify.com/"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <img
                    className="cadence-img"
                    src={chatify}
                    alt="chatify gif"
                  />
                </Cadence>
                <h3>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Chatify - Slack Clone App
                  </a>
                </h3>
                <p>
                  Chatify was built to mimic the popular community app Slack.
                  Users can register with passport and begin customizing their
                  accounts to their liking. You can add a status for other
                  members to see as well as create new channels. You can give
                  your channel a purpose for others to follow and begin
                  chatting.
                </p>
                <p>
                  ReactJS | Redux | NodeJS | ExpressJS | MongoDB | JWT | oAuth |
                  PassportJS | ValidatorJS
                </p>
                <a
                  href="https://github.com/CLantigua2/chatify"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  See The Code
                </a>
              </li>

              <li>
                <Cadence
                  href="https://devsocialdotcom.herokuapp.com/"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <img
                    className="cadence-img"
                    src={devsocial}
                    alt="devsocial gif"
                  />
                </Cadence>
                <h3>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    DevSocial - Social App for Developers
                  </a>
                </h3>
                <p>
                  DevSocial is a social media application for professionals
                  within the development and design fields. They can use this
                  app to communicate, share ideas and even look for potential
                  teams based on the special criterias that you may want to work
                  with.
                </p>

                <p>
                  ReactJS | Redux | NodeJS | ExpressJS | MongoDB | JWT |
                  PassportJS | ValidatorJS | Gravatar
                </p>
                <strong>
                  <a
                    href="https://github.com/CLantigua2/devsocial"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    See The Code
                  </a>
                </strong>
              </li>
            </ul>
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
            <Tech />
            <p className="content">
              I enjoy working on a team that focuses on communication and
              teamwork as the foundation of a products life cycle. I have
              experience as a project manager leading small teams and as a
              software engineer building out features utilizing agile
              methodologies. Fluent in JavaScript, ReactJS, Node with ExpressJS,
              git, RDB, test driven development, python, c and other
              technologies. My favorite projects are the ones that teach you
              things you didn't know and introduce you to challenges you may not
              have faced yet.
            </p>
            <Form />
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    About Me
                  </Link>
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
const Linked = styled.a`
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 300;
  height: 2.75em;
  line-height: 2.75em;
  min-width: 3.25em;
  border-radius: 32%;
  padding: 7px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  box-shadow: inset 0 0 0 1px #dddddd;
  color: #636363;
`
