import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Page404 from './Page404'
import UsersParam from './UsersParam'
import Filter from './Filter'
import Contact, {Company, OtherContacts, Channel} from './Contact'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'

const RoutesWrap = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<ProtectedRoute Component={Home} />} />
        <Route path='/about' element={<About />} />
        <Route path='/users/:name' element={<UsersParam />} />
        <Route path='filter' element={<Filter />}/>
        <Route path='/contact/' element={<Contact />}>
          <Route path='company' element={<Company />} />
          <Route path='channel' element={<Channel />} />
          <Route path='others' element={<OtherContacts />} />
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </div>
  )
}

export default RoutesWrap;
