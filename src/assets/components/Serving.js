import React from 'react'
import '../css/serving.css'

function Serving() {
  return (
    <section>
        <div className='serving-section'>
            <h3 className='text-center mt-2'>Proudly Serving Boston <br/>
            & The Surrounding Area</h3>
          <div className='serving-section-inner mx-2 mx-md-3 mx-lg-4 mt-3 d-flex flex-column flex-md-row'>
            <div className='serving1 col-12 col-md-5'>
                <img src='assets/image/Service-Area-Img-01-1 1.png' alt='' className='img-fluid'/>
            </div>
            <div className='serving2 col-12 col-md-7 ps-2 ps-md-4'>
                <h4 className='mt-3 mt-md-0 mb-md-0'>Our Service Area</h4>
                <div className='serving2-inner d-flex flex-column flex-md-row'>
                <ul>
                    <li>Andover</li>
                    <li>Billerica</li>
                    <li>Boston</li>
                    <li>Burlington</li>
                    <li>Cambridge</li>
                    <li>Lowell</li>
                    <li>Lynn</li></ul>
                    <ul>
                    <li>Lynnfield</li>
                    <li>Malden</li>
                    <li>Medford</li>
                    <li>Melrose</li>
                    <li>Methuen</li>
                    <li>North Reading</li>
                    <li>Reading</li></ul><ul>
                    <li>Salem</li>
                    <li>Somerville</li>
                    <li>Stoneham</li>
                    <li>Tewksbury</li>
                    <li>Wilmington</li>
                    <li>Winchester</li>
                    <li>Woburn</li>
                </ul>
                </div>
                <div className='hiring-sec-buttons d-flex'>
        <a className="  pl-3 pr-3 rounded-pill  hiring-sec-b1 text-decoration-none" href="#">Full Service Area</a>
                
               </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Serving