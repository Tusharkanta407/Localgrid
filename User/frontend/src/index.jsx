import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// Create root element if it doesn't exist
function getRootElement() {
  let root = document.getElementById("root")
  if (!root) {
    root = document.createElement("div")
    root.id = "root"
    document.body.appendChild(root)
  }
  return root
}

const container = getRootElement()
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
