import React from 'react'
import '../css/maintenance.css'

function Maintenance() {
  return (
    <section>
        <div className='maintenance d-flex flex-column flex-md-row w-100 mt-3 mb-5'>
              <div className='maintenance1 col-12 col-md-6'>
              <div className='maintenance1-content mb-5'>
                <h3 className='text-start'>Maintenance Plans</h3>
                <h2>Keep Your Home In Top Shape With Our Annual Plans</h2>
                <div className='maintenance-sec-buttons d-flex'>

<a className="  pl-3 pr-3 rounded-pill  maintenance-sec-b2 text-decoration-none my-2 " href="#">Learn More</a>
          </div>
              </div>
              </div>

              <div className='maintenance2 col-12 col-md-6'>
                <div className='maintenance1-content mb-5'>
                <h3>Finance</h3>
                <h2>Don’t Sweat It! Check Out Our Financing Options</h2>
                <div className='maintenance-sec-buttons d-flex'>

<a className="  pl-3 pr-3 rounded-pill  maintenance-sec-b2 text-decoration-none my-2" href="#">Apply Now</a>
          </div>
              </div></div>
        </div>
    </section>
  )
}

export default Maintenance