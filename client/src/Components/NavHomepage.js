import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { getPayload } from '../helpers/auth'
import ButtonSignup from './navbar/ButtonSignup.js'
import ButtonLogin from './navbar/ButtonLogin.js'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'

const NavHomepage = () => {

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
      <nav>
        <div className="container-fluid">
          <nav className="homepage-navbar-wrapper">          
            <ul>
              {!userIsAuthenticated() ? 
                <>
                  <li className="nav-item">
                    <ButtonLogin />
                  </li>
                  <li className="nav-item">
                    <ButtonSignup />
                  </li>
                </>
                :
                <li className="nav-item">
                  <Link to="/profile" className="link-login-homepage">
                    <img
                      src={userInfo.image}
                      alt={userInfo.uername}
                      height={50}
                      width={50}
                      className="nav-bar-profile-image"
                    />
                    <Navbar.Brand className="login-register" href="/profile"> {userInfo.username}</Navbar.Brand>
                  </Link>
                </li>
              }
            </ul>
          </nav>
        </div>
      </nav>
    </>    
  )
}

export default NavHomepage