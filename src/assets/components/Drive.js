import React from 'react'
import '../css/drive.css'

function Drive() {
  return (
    <section>
        <div className='drive-sec w-100 mb-xl-5'>
            <div className='drive-sec-inner position-relative p-2 p-md-5 p-lg-5'>
                <h3 className='pt-lg-5'>What Drives Us?</h3>
                <h4 className='mt-3'>Super Service Today stands out by ensuring unparalleled professionalism and reliability through a
                commitment to excellence.</h4>
                <h4>We empower customers by presenting multiple options, enabling them to make informed decisions
tailored to their needs. While our services may initially seem to have a higher cost, they actually provide substantial long-term savings that prevent unnecessary aggravation and frustration.</h4>
                <h4>Our customers experience peace of mind through quality service, convenience, and the industry-leading guarantees we offer.</h4>
               <div className='hero-sec-buttons drive-sec-b d-flex w-md-25'>

        <a className="  pl-3 pr-3 px-md-5 py-md-2 mt-md-3 rounded-pill  hero-sec-b1 text-center text-decoration-none" href="#">Learn More</a>
                  </div>
                  <img src='assets/image/super-service-van-new copy 1.png' alt='' className='img-fluid mt-2'/>
            </div>
        </div>
    </section>
  )
}

export default Drive