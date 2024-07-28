import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import profile_icon from '../../assets/people.png'
import caret_icon from '../../assets/caret_icon.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
              <img src={logo} alt="" />
              <ul>
                <li>Series</li>
                <li>Film</li>
                <li>Daftar Saya</li>

              </ul>
            </div>
            <div className="navbar-right-profile">
               <img src={profile_icon} alt="" className='profile' />
               <img src={caret_icon} alt="" />
               <div className="dropdown">
                  <p>Profil Saya</p>
                  <p>Ubah Premium</p>
                  <p>keluar</p>
               </div>
            </div>
        </div>
    )
}

export default Navbar