import {Component} from 'react'

import {CgMenuGridO} from 'react-icons/cg'

import './index.css'

class Header extends Component {
    render() {
        return (
            <>
            <div className='header-Desktop'>
                <div className='align1'>
                 <div >
               <img src = "https://i.ibb.co/rfWwvjz/logo.jpg" alt = "logo" className='logo-image'/>
               </div>
              <ul type = "none" className='align'>
                <li className='nav-item'>Explore</li>
                <li className='nav-item'>Company</li>
                <li className='nav-item'>Support</li>
              </ul>
              </div>
              <div className='align'>
                <p className='nav-item'>Become a member</p>
                <button type = "button" className = "sign-button">sign in</button>
              </div>
            </div>
            <div className='mobile-navbar'>
            <div >
               <img src = "https://i.ibb.co/rfWwvjz/logo.jpg" alt = "logo" className='logo-image'/>
               </div>

              <CgMenuGridO className='menu-bar'/>
            </div>
           

            </>
        )
    }
}

export default Header 