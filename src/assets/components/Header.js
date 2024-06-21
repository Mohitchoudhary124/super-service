import React from 'react'
import '../css/header.css'
import logoimg from '../images/Super-Service-Today-Logo 1.png'
import vectorimg from '../images/Vector (3).png'
import downarrow from '../images/Vector (3).png'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
    <img src={logoimg} alt='' className=''/>
        <a className="nav-link active text-black header-link" href="#">About</a>
        <a className="nav-link header-link" href="#">Services</a>
        <a className="nav-link header-link" href="#">Financing</a>
        <a className="nav-link header-link" href='#'>Membership</a>
        <a className="nav-link header-link" href="#">Careers</a>
        <a className="nav-link header-link" href='#'>Contact</a>
        <a className="nav-link h-10p w-10px" href='#'><img src={vectorimg}/></a>
        <a className="nav-link header-link  pt-4 pl-3 pr-3 rounded-pill `bg-{#000000}` back-col" href="#"><img src={downarrow}/>Schedule Now</a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header