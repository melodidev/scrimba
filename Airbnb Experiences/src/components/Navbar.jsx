import "../App.css"

export default function Navbar() {
  return (
    <nav className="navbar bg-white shadow">
      <div className="container-fluid">
        <a className="navbar-brand text-red fw-semibold ms-2" href="#">
          <i className="fa-brands fa-airbnb fa-lg me-2"></i>airbnb
        </a>
      </div>
    </nav>
  )
}
