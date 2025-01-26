import React, { useEffect, useState } from 'react'
import Afterbar from '../Navbar/Afterbar'
import axios from 'axios'
import Afterdctrnav from '../Navbar/Afterdctrnav'
import { useLocation } from 'react-router-dom'
const Afterloginadoctor = () => {
    const location = useLocation();
    const name = location.state && location.state.name
const [data,setData] = useState([])
    const fetchData = async() =>{
        try {
            const res = await axios.get("http://localhost:5050/doctor/book-data-get-admin")
            console.log(res.data.data)
            setData(res.data.data)
        } catch (error) {
            console.log("Error" + error)
        }
    }
    useEffect(()=>{
        fetchData()
       
    },[])
  return (
    <>
   <Afterdctrnav name={name}/>
    <div>
        
    <div style={{}}>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((val, ind) => {
          return (
            <tr key={ind}>
              <td>{val.fname}</td>
              <td>{val.lname}</td>
              <td>{val.address}</td>
              <td>{val.phone}</td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
</div>
    </div>
    </>
  )
}

export default Afterloginadoctor
