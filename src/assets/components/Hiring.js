import React from 'react'
import '../css/hiring.css'

function Hiring() {
  return (
    <section>
        <div className='hiring-sec px-2 ps-md-5 d-flex flex-column flex-md-row'>
            <div className='hiring-sec-d1 col-12 col-md-5'>
                <h3>
                    We're Hiring
                </h3>

                <p className='text-start mt-4 '>There’s Nothing Like <br/> Loving Your Job</p>
               <h4 className='text-start'>We believe in fostering an environment where every employee is not just a part of the team but an integral contributor to our collective journey. A journey where every employee's growth mirrors the company's evolution.</h4>
               <div className='hiring-sec-buttons d-flex'>
        <a className="  pl-3 pr-3 rounded-pill  hiring-sec-b1 text-decoration-none mt-2 mb-4" href="#">Join The Team</a>
                
               </div>
            </div>
            <div className='hiring-sec-d2 col-12 col-md-7'>   
                <img src='assets/image/1S9A7264 1.png' alt='' className='img-fluid ms-0 ms-md-5'/>
            </div>
        </div>
    </section>
  )
}

export default Hiring