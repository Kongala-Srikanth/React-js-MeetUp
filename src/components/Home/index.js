import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {userName, topic} = value
      console.log(value)
      console.log(userName)
      console.log(topic)
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
          <div className="home-page-container">
            <h1 className="main-heading">Welcome to Meetup</h1>
            <p className="description">Please register for the topic</p>
            <Link to="/register" className="link">
              <button type="button" className="register-btn">
                Register
              </button>
            </Link>

            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="home-page-img"
            />
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
