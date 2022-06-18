import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './styling'
export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <div   style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}>
       <Nav>
       <h1>Rblunlocking</h1>
  
        
         
          
          <NavLink to='/imei' activeStyle>
            Imei Services
          </NavLink>
          <NavLink to='/server' activeStyle>
             Server Services
          </NavLink>
       
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        
      
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> 
      
      </Nav>
      </div>
    </>
  )
}
