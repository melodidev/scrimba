import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {

	function fakeLogOut() {
		localStorage.removeItem("loggedin");
	}

	return (
		<nav className="d-flex justify-content-between my-4 mx-3">
	    <NavLink to="/" >
	    	<img src={logo} className="width-120" />
	    </NavLink>
	    <div className="d-flex align-items-center">
			  <NavLink
			  	to="/host"
			  	className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-bold me-2" : "text-decoration-none fw-semibold text-grey me-2"}
			  >
			  	Host
			  </NavLink>
	      <NavLink
	      	to="/about"
	      	className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-bold me-2" : "text-decoration-none fw-semibold text-grey me-2"}
	      >
	      	About
	      </NavLink>
	      <NavLink
	      	to="/vans"
	      	className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-bold me-2" : "text-decoration-none fw-semibold text-grey me-2"}
	      >
	      	Vans
	      </NavLink>
	    	<NavLink to="/login" className="text-grey">
	    		<i className="fa-regular fa-circle-user fa-xl"></i>
	   		</NavLink>
	   		<button onClick={fakeLogOut}>X</button>
	    </div>
		</nav>
	)
}