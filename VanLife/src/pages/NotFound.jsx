import { Link } from "react-router-dom";

export default function NotFound() {
	return(
		<div className="mx-3 my-5">
			<div className="fw-bold fs-2 lh-sm">Sorry, the page you were looking for was not found.</div>
			<button className="border-0 w-100 rounded bg-black py-2 fs-sm mt-4">
				<Link to="/" className="text-light text-decoration-none fw-bold">Return to home</Link>
			</button>
		</div>
	)
}