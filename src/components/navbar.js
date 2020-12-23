import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="uk-navbar-container" uk-navbar>
      <div className="uk-navbar-left uk-background-default">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
