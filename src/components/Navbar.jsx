import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>こんにちは</h1>
      <Link to="/Blog">ブログ</Link>
    </nav>
  )
}

export default Navbar
