import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
import Form from './Form'
import HomeTag from './HomeTag'

const HeroSection = (props) => {
  return (
    <section className='hero-section'>
      <div className='container'>
      <div className='grid grid-two-column'>
        <div className='left-box'>
          {/* <HomeTag /> */}
          {/* <Form /> */}
          {props.type == "home" ? <HomeTag /> : <Form />}
        </div>

        {/* <Form /> */}

        <div className='right-box'>
          <img src='./images/building.png' alt='building' />
        </div>
      </div>
    </div>
    </section>

    
    
  )
}

export default HeroSection