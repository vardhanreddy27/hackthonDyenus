import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

function Banner() {
  return (
    <div className="container p5"> 
     <div className='row'>
      <h2><span className="bold">IFO</span>:<span className="thin"> Initial Farm Offerings</span>
      </h2>
      <p className='helperText'>Buy new tokens launching on Chain</p>
     </div>
     <div className='row banner' style={{ 
      backgroundImage: 'url(./bannerhome.png)', backgroundRepeat  : 'no-repeat',
       backgroundPosition: 'center',
    }}>
      <div className='col-sm-4'> 
          <button className='btn'>How does it work?</button>
      </div><div className='col-sm-4'></div><div className='col-sm-4 center'>
     <button className='btn1'>Participate Now <BsArrowRight  /></button></div>
     </div>
    </div>
  )
}

export default Banner
