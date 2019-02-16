import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import family from '../assets/images/family.jpg'

const Generic = () => (
  <Layout>
    <Helmet title="Generic Page Title" />
    <HeaderGeneric />
    <div id="main">
      <section id="content" className="main">
        <span className="image main">
          <img src={family} alt="my family" />
        </span>
        <h2>About Me...</h2>
        <p>
          After 10 years, I made the decision to get out of the Marines in 2015
          and look for something more rewarding. I debated going back to college
          for engineering but didn't want take 4 years off from work as I have a
          family to think of. I began working as a quality inspector at an
          airplane manufacturing company where my job included peering over docs
          and paying extremely close attention to designs. Eventually the
          challenges dried out as I began to train the people that trained me
          and there were no more problems to solve. A friend of mine then
          recommended that I look into programming. I messed around with some
          python while going to school for video game art but didn't know much
          about it at this point. He recommended FreeCodeCamp and I was
          instantly hooked. Just giving it a shot to see what it was about
          turned into several months back to back of coding.
        </p>
        <p>
          From Then I went on to build a bunch of small projects to push myself
          but realized that it wasn't enough to get me where I wanted to be
          while maintaining my full time job. So I had the talk with my wife and
          told her I wanted to leap in completely. I then applied to 3 coding
          schools and after completing the precourses and interviews I was
          accepted to the first 2. My last choice which was also the most
          challenging still required a weeks worth of work. This was Lambda
          School, which I heard about from my friend who was an alumni. At this
          point I decided to start my YouTube channel as well to document my
          progress and share it with others who felt the way I did. After my
          interview with Lambda Schools admissions person, I waited two days
          constantly checking my email as I would code into the night. At this
          point I quit my job and made the decision that I would be coding full
          time regardless of the decision of the schools. I wanted to do what I
          have enjoyed to the point that I didn't want to give myself a fallback
          excuse.
        </p>
        <h2>Lambda School...</h2>
        <p>
          The email finally came through and I was accepted. I quickly called
          the other schools and thanked them for the offer as I declined. One of
          them was not pleased and he felt the need to let me know about it as
          if I violated his trust. Then came Lambda School, long, painful,
          challenging, fun, exciting Lambda School. I learned things like
          semantic HTML, user accessibility, React, JavaScript, different state
          management systems, Node, express, styling platforms, algorithm
          solving skills, python, c, agile methodologies and so much more. In
          between it all, I joined up with a team of 4 other engineers and
          together we built Cadence which is pictured in the landing page under
          projects. I built Chatify as a so solo project to see how far I could
          get mimicing the Slack app I've come to enjoy using tech like mongoDB
          which was not taught at the time I attended Lambda. It has been the
          best ride ever and the amount of stuff still left to learn is amazing.
          Completing one challenge means you get to move on a to a new one every
          day.
        </p>
        <Link to="/" className="button">
          Home
        </Link>
      </section>
    </div>
  </Layout>
)

export default Generic
