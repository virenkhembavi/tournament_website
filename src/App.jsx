import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div className="p-10 text-center">Page not found</div>} />
      </Routes>
    </Router>
  )
}

export default App
