import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";

export default function Dashboard() {
	const [vans, setVans] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		setLoading(true)
		getHostVans()
			.then(data => setVans(data))
			.catch(err => setError(err))
			.finally(() => setLoading(false))
	}, [])

	function renderVanElements(vans) {
		const hostVansEls = vans.map((van, i) => (
			<div key={i} className="bg-white rounded px-3 py-2 mb-2">
				<div className="row">
					<div className="col-3">
						<img src={van.imageUrl} className="rounded img-fluid" />
					</div>
					<div className="col-9 mt-2">
						<div className="d-flex justify-content-between align-items-center">
							<div>
								<div className="fw-semibold text-dark">{van.name}</div>
								<div className="text-grey fs-sm">${van.price}/day</div>
							</div>
							<Link to="#" className="text-underline-hover fs-sm text-grey">Edit</Link>
						</div>
					</div>
				</div>
			</div>
		))

		return (
			<div>
				<section className="my-3">{hostVansEls}</section>
			</div>
		)
	}

	if (loading) return (<div className="mx-3 fs-2 fw-bold mb-5">Loading...</div>)
	if (error) return (<div className="mx-3 fs-2 fw-bold mb-5">Error: {error.message}</div>)

	return (
		<div className="mt-4">

			<section className="bg-light-yellow p-3">
				<div className="fs-2 fw-bold">Welcome!</div>
				<div className="d-flex justify-content-between my-2">
					<div className="fs-sm text-grey">
						Income last 
						<span className="text-decoration-underline fw-bold ms-1">30 days</span>
					</div>
					<Link to="income" className="text-grey text-underline-hover fs-sm">Details</Link>
				</div>
				<div className="display-5 fw-bold">$2,260</div>
			</section>

			<section className="d-flex justify-content-between align-items-center bg-yellow px-3 py-4">
				<div className="d-flex align-items-center">
					<div className="fs-5 fw-bold me-2">Review Score</div>
					<i className="fa-solid fa-star color-star me-1"></i>
					<div><span className="fw-bold">5.0</span>/5</div>
				</div>
				<Link to="reviews" className="text-grey text-underline-hover fs-sm">Details</Link>
			</section>

			<section className="p-3">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-5 fw-bold">Your listed vans</div>
					<Link to="vans" className="text-grey text-underline-hover fs-sm">View all</Link>
				</div>

				{loading && !vans
					? <div className="mx-3 fs-2 fw-bold mb-5">Loading...</div>
					: ( <> {renderVanElements(vans)} </> )
				}
			</section>
		</div>
	)
}
