
import React from 'react'
import Typewritter from 'typewriter-effect'

export default ({data}) => {

  const messages = [
    'I\'m Jesus Cruz:<br>',
    emphasysText('full-stack developer.')
  ]

  function writtingHeello(typewriter) {
    typewriter
    .typeString('Hell world')
    .pauseFor(1000)
    .deleteChars(6)
    .typeString('o world =D <br>')

    messages.forEach((message) => {
      typewriter.typeString(message)
      .pauseFor(1000)
    })

    typewriter.start()
  }

  return <div className="index-page">
    <section className="hello-section grey darken-3 section">
      <div class="message container">
        <h3 className="bold-text white-text center-align">
          <Typewritter options={{loop: false, delay: 80}} onInit={writtingHeello}></Typewritter>
        </h3>
      </div>
      <a href="#skills" className="btn-large green">Know more</a>
    </section>
    <Skills />
    <CoomingSoon />
  </div>
}


const Skills = () => {

  const values = [
    {
      icon: 'remove_from_queue',
      title: 'Minimal',
      text: 'Small, simple and lean solutions, less code, less cost, less issues, more value'
    },
    {
      icon: 'lightbulb_outline',
      title: 'Creative',
      text: 'Work smarter not harder, get value on every line of code, save time, save money'
    },
    {
      icon: 'monetization_on',
      title: 'KPI 1st',
      text: 'Resolve problems that matters. all actions focused on company targets, '
    },
    {
      icon: 'security',
      title: 'Secure',
      text: 'Stay safe and take a cup of tea after work, testable solutions'
    }
  ]

  const techs = {
  /*  js: '80%',
    node: '70%',
    html: '90%',
    css : '90%',
    react: '90%'
    */
  }

  return <section id="skills" className="skills-section section grey lighten-3">
    <div class="section-container container">
      <h3>My values:</h3>
      <div class="section-body values row">
        {
          values.map((value) => <Value {...value} color="green" />)
        }
      </div>
        <h3 className="bold-text grey-text darken-3-text">
          {
            Object.keys(techs).map((key) => {
              return (
                <div class="row">
                  <div class="col s4 offset-s3"><h4>{key}</h4></div>
                  <div class="col s3"><h4>{techs[key]}</h4></div>
                </div>
              )
            })
          }
        </h3>
    </div>
  </section>
}

const CoomingSoon = () => {

  const values = [
    {
      icon: 'public',
      title: 'lesswit (wip)',
      text: 'Eco friendly economy app, help business and customers. react-native app',
    },
    {
      icon: 'games',
      title: 'x-arcade (wip)',
      text: 'Control minigames from your phone and play with friends'
    }
  ]

  return <section id="projects" className="projects-section section green darken-3">
    <div class="section-container container white-text">
      <h3 class="section-title">What's going on?</h3>
      <div class="section-body">
        <div class="values row">
          {
            values.map((value) => <ValueBig {...value} color="white" />)
          }
        </div>
      </div>
    </div>
  </section>
}

function Value(props) {
  return (
    <div class="value col s6 m3 center-align">
      <i class={`large material-icons ${props.color}-text`}>{props.icon}</i>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  )
}


function ValueBig(props) {
  return (
    <div className="value col s12 m6 center-align">
      <i className={`large material-icons ${props.color}-text`}>{props.icon}</i>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  )
}

function emphasysText(text) {
  return `<span class="accent-3 green-text">${text}</span>`
}
 
