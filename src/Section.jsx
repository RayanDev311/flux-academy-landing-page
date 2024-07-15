import React from 'react'
import './Section.css'
//import secondSection from './secondSection.jpg'


function Section() {
  return (
    <div className='second'>
    <div className='img'>
 {/*<img src={secondSection} alt="image" className="section-img" />*/}
 </div>
    <div className='text'>
    <h3>Long headline on two lines to turn your visitors into users and achieve more</h3>
    <div className='section-list'>
         <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean</p>
         <ul>
            <li>Showcase and embed your work with</li>
            <li>Publish across social channels in a click</li>
            <li>Sell your videos worldwide</li>
            <li>Embed your work with</li>
    </ul></div>
    
    </div>
    </div>
  )
}

export default Section