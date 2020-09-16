import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
    <Header headerText='WHAT UP, PLANET!' />
      <p>Strange place</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}