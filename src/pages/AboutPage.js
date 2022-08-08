import React from 'react'
import DisplayLottie from '../components/DisplayLottie'
import lottieURL from '../assets/about_us.json';
import { Link } from 'react-router-dom';
import '../components/DisplayLottie.css'

export default function AboutPage() {
  return (
    <div>
      <section id="header" className='d-flex align-items-center'>
      <div className='container-fluid p-4'>
        <div className="row">
          <div className="col-10 max-auto">
            <div className="row">
              {/* left div with text  */}
              <div className='col-lg-6 order-2  order-lg-1 header-img'>
                <DisplayLottie lottieFile={lottieURL} className="size_img" />
              </div>
              {/* right div with animation */}
              <div className='col-md-5 pt-5 pt-lg-0 mx-3 ps-4 order-2 order-lg-1 d-flex justify-content-center flex-column '>
                <h1>Who am I ,
                    <strong className='text-primary mx-2'>A Jagannath</strong>
                </h1>
                <h5 className='my-3'>My name's A Jagannath. I'm a web designer and developer based from India</h5>
                <h5 className='my-3'>During the day I work as a lead developer at a local agency and in the evening I work on freelance projects and utilize the time to built my own products. I spent my leisure hours writing articles and poetry.
                 Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.</h5>
                <div className='mt-3'>
                  <Link to="/service" className='btn btn-outline-primary rounded-5'>
                    Get Started</Link>
                </div>
              </div>
              
              

            </div>

          </div>

        </div>

      </div>
    </section>
    </div>
  )
}
