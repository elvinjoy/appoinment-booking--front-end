
import Home from '../pages/Home';
import Service from '../pages/services';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Doctor from '../pages/Doctor/Doctor';
import DoctorDetailes from '../pages/Doctor/DoctorDetailes';
import {Routes, Route} from 'react-router-dom'


const routers = () => {
  return (

   <Routes>
<Route path='/' element={<Home/>} />
<Route path='/Home' element={<Home/>} />
<Route path='/Services' element={<Service/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/register' element={<Signup/>} />
<Route path='/login' element={<Login/>} />
<Route path='/doctors' element={<Doctor/>} />
<Route path='/doctors/:id' element={<DoctorDetailes/>} />
   </Routes>
  )
}

export default routers
