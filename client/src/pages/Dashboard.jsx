import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'

const Dashboard = () => {
  const [userData, setUserdata] = useState({})

  const fetchLoggedUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/login/success", { withCredentials: true })

      if (response) {
        setUserdata(response.data.user)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchLoggedUser()
  }, [])

  const logout = () => {
    window.open("http://localhost:8000/logout", "_self")
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{userData?.email}</p>
      <p>{userData?.name}</p>
      <p>{userData?.googleID}</p>
      <img src={userData?.image} alt="image loading....." className='Profile-image' />
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
