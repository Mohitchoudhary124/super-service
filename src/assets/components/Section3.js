import React from 'react'
import '../css/section3.css'

function Section3() {
  return (
    <section>
           <div className='slider-cards d-flex flex-column flex-md-row mx-auto p-0 align-content-center  row-gap-2 p-1 my-md-n3'>
            <div className='card1 scard mx-auto p-0 p-md-2 align-content-center'>
                <img src='assets/image/a (1).png' alt='' className='img-fluid'/>
                <h4>Plumbing</h4>
            </div>
            <div className='card2 scard mx-auto p-0 p-md-2 align-content-center'>
                <img src='assets/image/a (2).png' alt='' className='img-fluid'/>
            <h4>Drain</h4>
            </div>
            <div className='card3 scard mx-auto p-0 p-md-2 align-content-center'>
            <img src='assets/image/a (3).png' alt='' className='img-fluid'/>
            <h4>Dry Basement</h4>
            </div>
            <div className='card4 scard mx-auto p-0 p-md-2 align-content-center'>
            <img src='assets/image/hvac-icon 1.png' alt='' className='img-fluid'/>
            <h4>HVAC</h4>
            </div>
            <div className='card5 scard mx-auto p-0 p-md-2 align-content-center'>
            <img src='assets/image/Electrical 1.png' alt='' className='img-fluid'/>
            <h4>Electrical</h4>
            </div>
           </div>
            <div className='section3-why mx-1'>
                <h3>Why choose Super Service Today?</h3>
            </div>
        <div className='section3 d-flex flex-column flex-md-row mx-1'>
        <div className='section3-d1 col-12 col-md-7'>   
                <img src='assets/image/1S9A7378_1 1.png' alt='' className='img-fluid mb-2 mb-md-0'/>
            </div>
            <div className='section-d2 mt-1 p-2 text-center col-12 col-md-5'>
                <h3 className='text-center mb-2'>
                What sets us apart?
                </h3>

               <ul>
                <li>Fully Licensed & Insured</li>
                <li>Better Business Bureau A+ Rated</li>
                <li>24/7 Emergency Service</li>
                <li>Friendly, Respectful Technicians</li>
                <li>Fully Stocked Trucks</li>
                <li>Satisfaction Guaranteed</li>
               </ul>
               <div className='hero-sec-buttons d-flex mb-3 column-gap-3'>
        <a className="  px-4 py-3 px-md-3 px-lg-5 py-md-1 py-lg-3 my-lg-4 rounded-pill  hero-sec-b1 text-decoration-none mt-md-0" href="#">Learn More</a>
        <a className="  px-4 py-3 px-md-3 px-lg-5 py-md-1 py-lg-3 my-lg-4 rounded-pill hero-sec-b2 text-decoration-none mt-md-0" href="#">Contact Us</a>
                
               </div>
            </div>
          
        </div>
    </section>
  )
}

export default Section3