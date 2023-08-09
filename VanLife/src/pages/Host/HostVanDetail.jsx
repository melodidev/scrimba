import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import HostVanType from "./HostVanType";
import { getHostVans } from "../../api";

export default function HostVanDetails() {
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id])

  if (loading) return (<div className="mx-3 fs-2 fw-bold mb-5">Loading...</div>)
	if (error) return (<div className="mx-3 fs-2 fw-bold mb-5">Error: {error.message}</div>)

	return (
		<div className="mx-3">
		
			<div className="mt-4 mb-3">
				<Link to=".." relative="path" className="text-decoration-none fs-sm text-grey">
					<div className="d-flex align-items-center">
						<i className="fa-solid fa-arrow-left me-1"></i>
						<div className="text-underline-hover">Back to all vans</div>
					</div>
				</Link>
			</div>

			<div className="bg-white rounded p-3 mb-4">
				<div className="row">
					<div className="col-5">
						<img src={van.imageUrl} className="img-fluid rounded" />
					</div>
					<div className="col-7 mt-3">
						<HostVanType type={van.type}></HostVanType>
						<div className="fs-4 fw-bold mt-1">{van.name}</div>
						<div>
							<span className="fw-bold fs-5">${van.price}</span>
							<span>/day</span>
						</div>
					</div>
				</div>

				<nav className="my-3">
					<NavLink
						to="."
						end
						className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-semibold" : "text-decoration-none text-grey"}
					>
						Details
					</NavLink>
					<NavLink
						price={van.price}
						to="pricing"
						className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-semibold mx-3" : "text-decoration-none text-grey mx-3"}
					>
						Pricing
					</NavLink>
					<NavLink
						to="photos"
						className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-semibold" : "text-decoration-none text-grey"}
					>
						Photos
					</NavLink>
				</nav>

				<Outlet context={{ van }} />
			</div>
		
		</div>
	)
}