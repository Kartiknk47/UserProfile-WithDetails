import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        async function fetchAPI(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(response)
        setUsers(response.data)
        setLoading(false)
    }
    fetchAPI()
    },[])

    if(loading) return <div class="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>

  return (
    <div className='container'>
        <h1>User List</h1>
        <ul style={{listStyle:'none'}}>
            {users.map((k, index)=>(
                <li key={index}><Link to={`/user/${k.id}`}>{k.name}</Link></li>

            ))}

        </ul>
    </div>
  )
}

export default UserList