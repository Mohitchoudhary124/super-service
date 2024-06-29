import React from 'react'
import '../css/header.css'
import logoimg from '../images/Super-Service-Today-Logo 1.png'
import vectorimg from '../images/Vector (3).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <>
    
    <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-auto d-flex flex-sm-column flex-xs-column flex-md-row flex-lg-row flex-column  fw-normal" id="navbarNavAltMarkup">
    <img src={logoimg} alt='' className='logo-img img-fluid p-4 p-lg-3 p-md-2 mr-auto ml-0 ms-xl-2 ms-xxl-3'/>
      <div className="navbar-nav d-flex align-items-center ms-lg-4 gap-lg-4 gap-xl-5 gap-xxl-6 gap-md-1 flex-md-row">
        <a className="nav-link active text-black p-md-0 header-link fs-6 ml-4 text-start" href="#">About</a>
        <a className="nav-link header-link p-md-1 fs-6 text-start" href="#">Services <FontAwesomeIcon icon={faChevronDown} /></a>
        <a className="nav-link header-link p-md-0 fs-6 text-start" href="#">Financing</a>
        <a className="nav-link header-link p-md-1  fs-6 text-start" href='#'>Membership</a>
        <a className="nav-link header-link p-md-0 fs-6 text-start" href="#">Careers</a>
        <a className="nav-link header-link p-md-0 fs-6 text-start align-items-center" href='#'>Contact</a>
        <a className="nav-link p-md-1 h-10p w-10px fs-6 align-items-center" href='#'><img src={vectorimg}/></a>
      </div><div className='head-button'>
        <a className="nav-link header-link  fs-6 text-start  pl-3 pr-3 p-lg-2 p-xl-3 rounded-pill  back-col ms-lg-4 me-xl-3" href="#"><FontAwesomeIcon icon={faCheck} /> Schedule Now</a>

      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header