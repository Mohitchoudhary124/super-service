import React from 'react'
import '../css/Offers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function Offers() {
  return (
    <section>
      <div className='offer-section'>
        <h3 className='text-center mt-5 mb-4'>Today's offers</h3>
        <div className='offer-cards d-flex flex-column flex-md-row justify-content-around mw-100 mx-lg-2 justify-content-between gap-2'>
          <div className=' col-md-5 offer-card1 offer-sec-card text-center justify-content-center align-items-center my-3 rounded-top-3'>
           <div className='offer-card1-r1 px-2 pt-3 pt-lg-3 align-items-center  d-flex '>
            <img src='assets/image/a (1).png' alt='' className='img-fluid'/> <h2 className='px-3'>$59</h2> <h5 className='text-start ps-3'>Plumbing Repair Diagnostic + <br/>Immediate Dispatching</h5>
           </div>
           <div className='offer-card1-r2 px-0 pt-2 pt-lg-4 w-100  rounded-bottom-3 mt-lg-3'>
           <pre><h4>Original Price   $99.00</h4>
            <h4>Savings           -<span>$40.00</span></h4></pre>
            <h6>$59.00</h6>
            <p>Expires: 04-30-2024</p>
            <div className='offer-sec-buttons d-flex pb-3 '>

<a className="  pl-3 pr-3 rounded-pill  offer-sec-b1" href="#">Learn More <FontAwesomeIcon icon={faChevronDown}/></a>
          </div>
           </div>

          </div>
          <div className=' col-md-5  offer-card2 offer-sec-card  my-3 rounded-top-3 justify-content-center align-items-center '>
          <div className='offer-card1-r1 d-flex align-items-center pt-3 px-3 pt-lg-3 justify-content-around gap-2'>
            <img src='assets/image/a (2).png' alt='' className='img-fluid'/> <h2 className='pe-2'>$59</h2> <h5 className='ps-2'>Drain Clearing Diagnostic +<br/>Immediate Dispatching</h5>
           </div>
           <div className='offer-card1-r2 rounded-bottom-3 pt-3'>
            <div className='offer-original-p'>
           <pre><h4>Original Price     $99.00</h4>
            <h4>Savings    <span>-$40.00</span></h4></pre>
            </div>
            <h6 className='text-center'>$59.00</h6>
            <p className='text-center'>Expires: 04-30-2024</p>
            <div className='offer-sec-buttons d-flex pb-3 pb-lg-4'>

<a className="  pl-3 pr-3 rounded-pill  offer-sec-b1" href="#">Learn More <FontAwesomeIcon icon={faChevronDown}/></a>
          </div>
           </div>

          </div>
        </div>
        <div className='offer-sec-buttons d-flex'>

<a className="  pl-3 pr-3 rounded-pill  offer-sec-b2" href="#">See all offers</a>
          </div>
      </div>
    </section>
  )
}

export default Offers