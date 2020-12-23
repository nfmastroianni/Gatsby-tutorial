import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "../../node_modules/uikit/dist/css/uikit.css"

export default function Layout({ children }) {
  return (
    <div uk-grid>
      <Navbar />
      <div className="uk-container">{children}</div>
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.5/dist/js/uikit.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.5/dist/js/uikit-icons.min.js"></script>
    </div>
  )
}
