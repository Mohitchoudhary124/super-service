import React from 'react'
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck } from '@fortawesome/free-solid-svg-icons';



function Footer() {
  return (
    <section>
        <div className='footer p-2 p-md-4 rounded-top-4 mt-lg-3'>
            <div className='footer-inner d-flex flex-column flex-md-row align-items-center row-gap-3'>
                <div className='footer-col1'>
                    <img src='assets/image/Super-Service-Today-Logo 1.png' alt='' className='img-fluid'/>
                </div>
                <div className='footer-col2 d-flex flex-column flex-md-row w-25 justify-content-between mx-md-3'>
                    <ul className='ps-0'>
                        <li className='text-center text-md-start'>About</li>
                        <li className='text-center text-md-start'>Services</li>
                        <li className='text-center text-md-start'>Financing</li>
                        <li className='text-center text-md-start'>Membership</li>
                        <li className='text-center text-md-start'>Careers</li>
                        <li className='text-center text-md-start'>Contact</li>
                    </ul>
                    <ul className='ps-0'>
                        <li className='text-center text-md-start'>Terms of Use</li>
                        <li className='text-center text-md-start'>Privacy Policy</li>
                        <li className='text-center text-md-start'>Cookie Policy</li>
                        <li className='text-center text-md-start'>Reviews</li>
                    </ul>
                </div>
                <div className='footer-col3'>
                    <div className='col3-image d-flex mb-2 justify-content-between'>
                        <img src='assets/image/Service-Area-Icon-01 1.png' alt=''/>
                        <img src='assets/image/Service-Area-Icon-02 1.png' alt=''/>
                        <img src='assets/image/Service-Area-Icon-03 copy 1.png' alt=''/>
                    </div>
                    <h3 className='text-center text-md-start'>(781) 519-9921</h3>
                    <h3 className='text-center text-md-start'>4 Jewel Drive, Unit 6</h3>
                    <h3 className='text-center text-md-start'>Wilmington, MA 01887</h3>
                </div>
                <div className='footer-col4'>
                <div className='footer-button'>
        <a className="nav-link header-link  pl-md-3 pr-md-3 rounded-pill  back-col social-button ms-md-4" href="#"><FontAwesomeIcon icon={faCheck} /> Schedule Now</a>

      </div>
      <div className='footer-social d-flex justify-content-center justify-content-md-center'>
        <img src='assets/image/Group 52.png' alt='' className='img-fluid'/>
        <img src='assets/image/a (4).png' alt='' className='img-fluid'/>
      </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer