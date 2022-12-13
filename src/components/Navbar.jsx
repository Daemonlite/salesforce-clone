/* eslint-disable no-script-url */
import React from 'react'
import {FaUserAlt} from 'react-icons/fa'

function Navbar() {
 
  
  return (
    <div className='top navbar'>
        <div className='nav'>
          <div className="logo">
              <img src="https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg" alt="po" />
          </div>

          <div className="nav-links">
              <ul>
                  <li>Products</li>
                  <li>Industries</li>
                  <li>Learning</li>
                  <li>Support</li>
                  <li>Company</li>
                  <li>salesforce+</li>
              </ul>
        </div>

      </div>
      <div className="others">
              <div className="search">
              <FaUserAlt />
              </div>

              <div className="sign">
                <button className='nav-btn'>try for free</button>
              </div>

              
         
          </div>
   
  </div>
  )
}

export default Navbar