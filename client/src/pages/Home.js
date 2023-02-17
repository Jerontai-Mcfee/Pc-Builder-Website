import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { getPayload } from '../helpers/auth'
import ButtonSignup from './navbar/ButtonSignup.js'
import ButtonLogin from './navbar/ButtonLogin.js'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'



const Nav = () => {

  const [userInfo, setUserInfo] = useState([])
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false 
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }
// fetch user information from local storage
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/profile',
          {
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
          })
        setUserInfo(data)
      } catch (err) {
        console.log('err', err)
      }
    }
    getData()
  }, [])
  console.log('userinfo', userInfo)

  return (
    <>
      <div className="container-fluid">
        <nav className="homepage-navbar-wrapper">
          <div className="nav-logo-div">
            
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div>
          
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            
            
            {!userIsAuthenticated() ? 
              <>
                <li className="nav-item">
                  <Link to="/register" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Sign up
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Login
                  </Link> 
                </li>
                <ButtonSignup />
                <ButtonLogin />
              </>
              :
              // profile picture
              <Link to="/profile" >
                <img
                  src={userInfo.image}
                  alt={userInfo.username}
                  height={50}
                  width={50}
                  className="nav-bar-profile-image"
                />
                <Navbar.Brand clasName="login-register" href="/profile"> {userInfo.username}</Navbar.Brand>
              </Link>
            }
          </ul>

        </nav>
      </div>
      

    </>    

  )
}
export default Nav