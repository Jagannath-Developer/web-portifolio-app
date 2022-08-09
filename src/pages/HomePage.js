import React from 'react'
import DisplayLottie from '../components/DisplayLottie'
import lottieURL from '../assets/programming_computer.json';
import { Link } from 'react-router-dom';
import '../components/DisplayLottie.css'
import Footers from '../web/Footer';

export default function HomePage() {
  return (
    <section id="header" className='d-flex  align-items-center'>
      <div className='container p-4'>
        <div className="row">
          <div className="col-10 max-auto">
            <div className="row">
              {/* left div with text  */}
              <div className='col-md-6  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center   flex-column text-bg-bol'>
                <h1>Grow your business with
                    <strong className='text-primary mx-2'>AJ Studio</strong>
                </h1>
                <h4 className='my-3'> We are the team of talented developer making websites</h4>
                <div className='mt-3'>
                  <Link to="/service" className='btn btn-outline-primary rounded-5'>
                    Get Started</Link>
                </div>
              </div>
              {/* right div with animation */}
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <DisplayLottie lottieFile={lottieURL} className="size_img" />
              </div>

            </div>

          </div>

        </div>

      </div>
      
    </section>
  )
}
