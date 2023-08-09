import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import VanType from "./VanType"; 
import { getVans } from "../../api";

export default function Vans() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [vans, setVans] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const typeFilter = searchParams.get("type");

	useEffect(() => {
		async function loadVans() {
			setLoading(true);
			try {
				const data = await getVans();
				setVans(data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		}
		loadVans();
	}, []);

	const displayedVans = typeFilter ? vans.filter(van => van.type == typeFilter) : vans;

	if (loading) return (<div className="mx-3 fs-2 fw-bold mb-5">Loading...</div>)
	if (error) return (<div className="mx-3 fs-2 fw-bold mb-5">Error: {error.message}</div>)

	return (
		<div className="p-3">
			<div className="fw-bold fs-2">Explore our van options</div>
			<div className="d-flex justify-content-between align-items-center mt-2 mb-5">
				<div className="d-flex">
					<button
						onClick={() => setSearchParams({type: "simple"})}
						className={`bg-filter text-decoration-none fs-sm rounded text-center border-0 text-grey bg-simple-hover py-1 px-3 ${typeFilter === "simple" ? "selected" : ""}`}
					>
						Simple
					</button>
					<button
						onClick={() => setSearchParams({type: "luxury"})}
						className={`bg-filter text-decoration-none fs-sm rounded text-center border-0 text-grey bg-dark-hover py-1 px-3 mx-2 ${typeFilter === "luxury" ? "selected" : ""}`}
					>
						Luxury
					</button>
					<button
						onClick={() => setSearchParams({type: "rugged"})}
						className={`bg-filter text-decoration-none fs-sm rounded text-center border-0 text-grey bg-rugged-hover py-1 px-3 ${typeFilter === "rugged" ? "selected" : ""}`}
					>
						Rugged
					</button>
				</div>
				{ typeFilter ?
					<button
						onClick={() => setSearchParams({})}
						className="text-grey fs-sm text-underline-hover cursor-pointer border border-0 bg-transparent"
					>
						Clear filters
					</button>
				: null }
			</div>

			<div className="row">
	      {displayedVans.map(van => (
	        <div key={van.id} className="col-6">
	        	<Link to={van.id} state={{ search: `?${searchParams.toString()}` }} className="text-decoration-none">
	        		<img src={van.imageUrl} className="img-fluid rounded" />
	        		<div className="d-flex justify-content-between mt-2 mb-4">
	        			<div>
	        				<div className="text-dark fw-semibold">{van.name}</div>
	        				{/* <div className={createClassForVanType(van.type)}>{van.type}</div> */}
	        				<VanType type={van.type}></VanType>
	        			</div>
	        			<div>
	        				<div className="text-dark fw-semibold">{`$${van.price}`}</div>
	        				<div className="fs-sm text-dark fs-xs text-end">/day</div>
	        			</div>
	        		</div>
	        	</Link>
	        </div>
	      ))}
	    </div>
		</div>
	)
}