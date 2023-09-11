import React from 'react';
import Cover from './sea.jpg'
const Hero = () => {
    return (
        <>
            <div className="container py-5">

                <div className="row align-items-center">

                    {/* Title, Description, and Button */}
                    <div className="col-12 col-md-6">
                        <h1 className="rfs-30 text-primary mb-3">Sea-Land Shop</h1>
                        <p className="rfs-7 mb-4">Welcome to our shop. We have been Specializing in selling sea and land vehicles since 2016.</p>
                        <a className="btn-lg btn-primary" href="#" role="button">More Info</a>
                    </div>

                    {/* Image */}
                    <div className="col-12 col-md-6">
                        <div className="lc-block position-relative" style={{ zIndex: '-1' }}>
                            <img className="img-fluid" src="https://4kwallpapers.com/images/walls/thumbs_3t/2984.jpg" alt="Photo by Sandro Katalina" style={{ objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                    </div>

                </div>

                {/* Timeline */}
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <span className="fw-bolder me-3">2016</span>
                        <div style={{ flex: 1, height: '2px', backgroundColor: '#ccc', margin: '0 15px' }}></div>
                        <span className="fw-bolder ms-3">Present</span>
                    </div>
                </div>

            </div>
        </>
    );
}



export default Hero;