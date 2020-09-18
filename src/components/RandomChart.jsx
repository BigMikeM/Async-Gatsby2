import React from 'react'
// import chartData from '../data/chartSpec.json'
// import { createClassFromSpec } from 'react-vega'
import ExampleChart from './ExampleChartClass'

// const ExampleChart = createClassFromSpec('ExampleChart', chartData)

const RandomChart = () => {
  return (
    <div className="random-chart">
      <ExampleChart />
    </div>
  )
}

export default RandomChart
