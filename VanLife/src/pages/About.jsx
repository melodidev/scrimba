import { Link } from "react-router-dom";
import img from "../assets/images/about-hero.png";

export default function About() {
	return (
		<div>
			<div className="ratio ratio-21x9">
				<img className="img-fluid object-fit-cover" src={img} />
			</div>
			<div className="px-3">
				<div className="fs-2 fw-bolder lh-sm my-4">Don’t squeeze in a sedan when you could relax in a van.</div>
				<div className="lh-sm">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
					(Hitch costs extra 😉)</div>
				<div className="lh-sm mt-3">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</div>
				<div className="bg-salmon rounded px-4 py-3 my-4">
					<div className="fs-5 fw-bolder">Your destination is waiting.</div>
					<div className="fs-5 fw-bolder">Your van is ready.</div>
					<button className="border-0 rounded bg-black py-2 px-4 fs-sm my-3">
						<Link to="/vans" className="text-light text-decoration-none">Explore our vans</Link>
					</button>
				</div>
			</div>
		</div>
	)
}