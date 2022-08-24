import React from 'react'

function Hero({heroName}) {
    if(heroName ==='Joker') {
        return new Error('Not a hero');
    }
  return (
    <h3>{heroName}</h3>
  )
}

export default Hero