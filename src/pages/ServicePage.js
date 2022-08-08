import React from 'react'
import service from '../assets/services_file'
import ServiceCard from '../components/ServiceCard'

export default function ServicePage() {
  return (
    <div className='container text-center mt-4'>
      <h1>Our Services</h1>
      <div className='d-flex flex-wrap'>
        {
          service.map((item,i)=>(
            <div key={i} className="m-4">
              <ServiceCard  title={item.service} desc={item.desc}/>
            </div>
          ))

        }

      </div>
    </div>
  )
}
