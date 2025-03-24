import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import UserImg from '../assets/userImg.jpg'


const UserDetails = () => { 
  const {ID} = useParams()
    const [userDetail, setUserDetail] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        async function fetchAPI(){
        const response = await axios.get ('https://jsonplaceholder.typicode.com/users')
        // console.log(response)
        setUserDetail(response.data.find(k=>k.id == ID))
        setLoading(false)
    }
    fetchAPI()
    // console.log(userDetail)
    },[userDetail])

    if(loading) return <div className="spinner-border" role="status">
    {/* <span className="sr-only">Loading...</span> */}
  </div>

  return (
    <div style={{marginTop:'50px'}}>
        <h1>Use Details</h1>
      <div>
      <img src = {UserImg} alt='userImg' className='UserImg'/>
      </div>
      <div className="container" style={{width:'500px', backgroundColor:'lightgray'}}  >
        Name: {userDetail.name}<br/>
        User Name: {userDetail.username}<br/>
        Phone No: {userDetail.phone}<br/>
        Email: {userDetail.email}
        </div>
    </div>
  )
}
export default UserDetails
