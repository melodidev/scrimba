import { Link } from "react-router-dom";
import img from "../assets/images/home-hero.png";

export default function Home() {
	return (
		<div className="position-relative bg-footer">
			<div className="ratio ratio-4x3">
				<img className="img-fluid object-fit-cover filter" src={img} />
			</div>
			<div className="position-absolute top-0 pt-5 mx-3">
				<div className="text-light fw-bold fs-1 lh-sm">You got the travel plans, we got the travel vans.</div>
				<div className="text-light my-3">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</div>
				<button className="border-0 w-100 rounded bg-btn py-2 fs-sm">
					<Link to="/vans" className="text-light text-decoration-none">Find your van</Link>
				</button>
			</div>
		</div>
	)
}