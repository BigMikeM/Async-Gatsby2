import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Hit me up!</Link>
      <Header headerText="WHAT UP, PLANET!" />
      <p>Strange place</p>
      <img
        src="https://source.unsplash.com/random/1600x900"
        className="header-image"
        alt=""
      />
    </div>
  )
}
