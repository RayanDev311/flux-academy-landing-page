import React from 'react'
import './Testimony.css'
import Customer from './customer.jpg'
import meta from './meta.jpg'
import twitter from './twitter.jpg'


const TestimonySection = () => {
  return (
    <div className='box'>
        <section className='testimonies'>
    <div className='testimony'>
        <p>“A testimonial describing what the person thinks about this service, product or startup in general.”</p>
        <img src={Customer} alt="image" className="section-img" />
        <h4>Jamie Fox</h4>
        <div className='details'>
            <p>Description</p>
            <div className='img'>
                <img src={meta} alt="image" />
                <img src={twitter} alt="image" />
            </div>
        </div>
    </div>
    <div className='testimony hidden'>
        <p>“A testimonial describing what the person thinks about this service, product or startup in general.”</p>
        <img src={Customer} alt="image" className="section-img" />
        <h4>Jamie Fox</h4>
        <div className='details'>
            <p>Description</p>
            <div className='img'>
                <img src={meta} alt="image"/>
                <img src={twitter} alt="image"/>
            </div>
        </div>
    </div>
    <div className='testimony hidden h-tab'>
        <p>“A testimonial describing what the person thinks about this service, product or startup in general.”</p>
        <img src={Customer} alt="image" className="section-img" />
        <h4>Jamie Fox</h4>
        <div className='details'>
            <p>Description</p>
            <div className='img'>
                <img src={meta} alt="image" />
                <img src={twitter} alt="image" />
            </div>
        </div>
    </div>
    </section>

    <div className='circle'>
        <div></div>
        <div className='center'></div>
        <div></div>
    </div>
    
    </div>
  )
}

export default TestimonySection