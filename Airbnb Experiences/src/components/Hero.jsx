import "../App.css"
import img from "../assets/photo-grid.png"

export default function Hero() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src={img} alt="#" className="hero-img img-fluid mt-4" />
      </div>
      <div className="display-6 fw-semibold ms-4 mb-2 mt-4">Online Experiences</div>
      <div className="ms-4 mb-4">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</div>
    </div>
  )
}