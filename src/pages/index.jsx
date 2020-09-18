import React from 'react'
import Header from '../components/header'
import { Link } from 'gatsby'
import RandomChart from '../components/RandomChart'
import { VegaLite } from 'react-vega'

// function handleHover(...args) {
//   console.log(args)
// }

// const signalListeners = { hover: handleHover }

const spec = {
  width: 400,
  height: 200,
  mark: 'bar',
  encoding: {
    x: { field: 'category', type: 'ordinal' },
    y: { field: 'amount', type: 'quantitative' }
  },
  data: { name: 'table' }
}

const barData = {
  table: [
        { category: 'Luke', amount: 28 },
        { category: 'Leia', amount: 55 },
        { category: 'Han', amount: 43 },
        { category: 'Chewie', amount: 91 },
        { category: 'Rey', amount: 81 },
        { category: 'Ben', amount: 53 },
        { category: 'Palpatine', amount: 19 },
        { category: 'Anakin', amount: 87 },
        { category: 'Obi-wan', amount: 43 },
        { category: 'Bossk', amount: 91 },
        { category: 'Lando', amount: 92 },
        { category: 'Jango', amount: 72 },
        { category: 'Boba', amount: 48 }
  ]
}

export default function Home() {
  return (
    <div className='main-content'>
      <img
        src='https://source.unsplash.com/random/1600x900'
        className='header-image'
        alt=''
      />
      <Header headerText='WHAT UP, PLANET!' className='main-head' />
      <p>Strange place</p>
      {/* <RandomChart data={barData} signalListeners={signalListeners} /> */}
      <VegaLite spec={spec} data={barData} />
      <Link to='/contact/'>Hit me up!</Link>
    </div>
  )
}
