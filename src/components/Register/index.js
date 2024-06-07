import {Component} from 'react'
import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {userName: '', topic: topicsList[0].id, errorMsg: false}

  onSelectTopic = event => this.setState({topic: event.target.value})

  onEnterName = event => this.setState({userName: event.target.value})

  onRegister = event => {
    event.preventDefault()

    const {userName, topic} = this.state

    if (userName !== '') {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: true})
    }
  }

  renderRegisterForm = () => {
    const {errorMsg} = this.state
    return (
      <div>
        <nav className="nav-container">
          <Link to="/" className="link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
              className="logo"
            />
          </Link>
        </nav>
        <div className="register-page-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
            className="register-img"
          />
          <div>
            <h1 className="main-heading">Let us join</h1>
            <form className="register-container" onSubmit={this.onRegister}>
              <label htmlFor="userName" className="label">
                NAME
              </label>
              <input
                type="text"
                placeholder="Your name"
                id="userName"
                className="input-box"
                onChange={this.onEnterName}
              />
              <label htmlFor="topics" className="label">
                TOPICS
              </label>
              <select
                id="topics"
                className="input-box"
                onChange={this.onSelectTopic}
              >
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="register-btn btn-space">
                Register Now
              </button>
            </form>
            {errorMsg && <p className="error-msg">Please enter your name</p>}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {userName, topic} = this.state

    return (
      <RegisterContext.Provider
        value={{
          userName,
          topic,
          changeUsername: this.onEnterName,
          changeTopic: this.onSelectTopic,
        }}
      >
        {this.renderRegisterForm()}
      </RegisterContext.Provider>
    )
  }
}

export default Register
