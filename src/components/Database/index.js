import {useState, useEffect} from 'react'

import db from '../FireBase'

import './index.css'

import {collection, getDocs} from 'firebase/firestore'

const Database = () => {
  const [users, setUsers] = useState([])

  const usersCollectionRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)
    }

    getUsers()
  }, [])

  return (
    <div>
      <h1>User Details</h1>
    </div>
  )
}

export default Database
