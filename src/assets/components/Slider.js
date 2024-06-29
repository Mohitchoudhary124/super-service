import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/slider.css'; 

function Carousel() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container-fluid w-100">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 img-fluid" src="assets/image/1S9A7413 1.png" alt="First slide" />
            <div className="carousel-caption carousel-caption-custom ">
              <h3 className='text-start'>“</h3>
              <h5 className=' mb-xs-0 mb-sm-0 text-xs-start'>Great service all around, very responsive, professional, and thorough! Also cheerful and helpful in a very stressful emergency situation.</h5>
              <img src='assets/image/a.png' className="d-block mx-auto my-0" alt=''/>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/image/1S9A7413 1.png" alt="Second slide" />
            <div className="carousel-caption carousel-caption-custom">
              <h3 className='text-start'>“</h3>
              <h5 className=' mb-xs-0 mb-sm-0 text-xs-start'>Great service all around, very responsive, professional, and thorough! Also cheerful and helpful in a very stressful emergency situation.</h5>
              <img src='assets/image/a.png' className="d-block mx-auto my-0" alt=''/>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src="assets/image/1S9A7413 1.png" alt="Third slide" />
            <div className="carousel-caption carousel-caption-custom">
              <h3 className='text-start'>“</h3>
              <h5 className=' mb-xs-0 mb-sm-0 text-xs-start'>Great service all around, very responsive, professional, and thorough! Also cheerful and helpful in a very stressful emergency situation.</h5>
              <img src='assets/image/a.png' className="d-block mx-auto my-0" alt=''/>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
