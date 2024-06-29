import React from 'react'
import '../css/hero.css'

function Hero() {
  return (
    <section className='container-fluid'>
        <div className='hero-sec d-flex ps-0 ps-md-2 ps-lg-4 ps-xl-5 '>
            <div className='hero-sec-d1 col-12 col-md-5 pt-5 row-gap-xl-4 row-gap-xxl-5 gy-xl-5 h-auto gap-md-3 '>
                <h3 className='p-lg-4 p-md-3 pl-md-3'>
                    Day or night,
                </h3>

                <p className='mt-5  mt-lg-4 mt-md-3 my-lg-4 my-xl-5'>when emergencies strike, we restore <br/>
                the comfort and safety to your home.</p>
               <div className='hero-sec-buttons d-flex my-lg-4 my-xl-5'>
        <a className="  pl-3 pr-3 rounded-pill  hero-sec-b1 text-decoration-none mt-3 mb-3 fs-6 px-4 py-2 mt-lg-2 px-lg-3 py-lg-2 mt-md-1 text-center" href="#">Non-Emergency Service</a>
        <a className="  pl-3 pr-3 rounded-pill hero-sec-b2 text-decoration-none mt-3 mb-3 fs-6 px-4 py-2 ms-2 mt-lg-2 px-lg-3 py-lg-2 mt-md-0 text-center" href="#">Emergency Service</a>
                
               </div>
               <h4 className='fs-5 mt-3 text-start mt-md-1'>Peace of Mind. Clear Options. <br/>
               5-Star Service. Industry Leading Guarantees.</h4>
            </div>
            <div className='hero-sec-d2 col-12 col-md-7'>   
                <img src='assets/image/1S9A7314 1.png' className='img-fluid ms-lg-3 ms-md-2 ms-xl-0'/>
            </div>
        </div>
    </section>
  )
}

export default Hero