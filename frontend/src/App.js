import './App.css';
 import Login1 from './Components/LoginPage/Login1';
import Homep from './Components/Home/Homepage.js'
import Videoc from './Components/Videocallpages/Videoc.js';
import RoomPage from './Components/Room/index.js';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar.js';
import LoginPopup from './Components/LoginPage/LoginPopup.js';
import DoctorsPage from './Components/Doctors/DoctorsPage.js';
import Doctors from './Components/Doctors/Doctors.js';
import VideoCalling from './Components/Videocallpages/VideoCalling.js';
import Afterloginuser from './Components/afterlogin/Afterloginuser.js';
import Afterloginadoctor from './Components/afterlogin/Afterloginadoctor.js';
import { useEffect, useState } from 'react';
function App() {
  const [auth,setAuth] = useState("")
  useEffect(()=>{
   const token = localStorage.getItem("token");
    setAuth(token)
  },[])
  return (
    <div className="App">
   
<LoginPopup/> 
 <Routes>
 <Route path='/' element={<Homep/>}/>
<Route path='/Login1' element={<Login1/>}/>
<Route path='/Videoc' element={auth==null ? <Login1/> : <Videoc/>}/>
<Route path='/Doctors' element={<Doctors/>}/>
<Route path='/login' element={<Login1/>}/>
<Route path='/loginuser' element={auth==null ? <Login1/> : <Afterloginuser/>}/>
<Route path='/logindoctor' element={auth==null ? <Login1/> : <Afterloginadoctor/>}/>
<Route path="/Videoc/Room/:RoomId"   component={RoomPage} element={auth==null ? <Login1/> : <RoomPage/>} />

</Routes> 

{/* <DoctorsPage/> */}

     
    </div>
  );
}

export default App;

