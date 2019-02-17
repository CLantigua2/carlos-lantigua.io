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
        <Helmet title="Carlos Lantigua | Portfolio" />

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
                  I am a Marine veteran turned programmer. I first found out
                  that I enjoyed programming while persuing a degree in game art
                  design. I got a taste of Python coding and thought it was
                  awesome. From there I began to code on my own until I was
                  accepted into Lambda School where I went through an intense
                  immersive fullstack program. I've worked on team projects to
                  deploy fully production ready apps as well as personal
                  projects.
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
                  view the repo
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
                  ReactJS | Redux | NodeJS | ExpressJS | MongoDB | JWT |
                  PassportJS | ValidatorJS
                </p>
                <a
                  href="https://github.com/CLantigua2/chatify"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  view the repo
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
                  DevSocial is a social media app for professionals in the
                  development and design fields. They can use this app to
                  communicate, share ideas and even look for potential teams
                  based on criteria to work with.
                </p>

                <p>
                  ReactJS | Redux | NodeJS | ExpressJS | MongoDB | JWT |
                  PassportJS | ValidatorJS
                </p>
                <strong>
                  <a
                    href="https://github.com/CLantigua2/devsocial"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    view the repo
                  </a>
                </strong>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link
                    to="/https://devsocialdotcom.herokuapp.com/"
                    className="button"
                    style={{ padding: '10px' }}
                  >
                    <i className="fab fa-github" style={{ fontSize: '35px' }} />
                  </Link>
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
