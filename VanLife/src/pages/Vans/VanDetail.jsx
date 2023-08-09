import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import VanType from "./VanType";
import { getVans } from "../../api";

export default function Van() {
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const search = location.state?.search || "";
  const type = location.state?.search.slice(6) || "all";

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans(id);
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
  	<div className="px-3">
			<Link to={`..${search}`} relative="path" className="text-decoration-none fs-sm text-grey">
				<div className="d-flex align-items-center">
					<i className="fa-solid fa-arrow-left me-1"></i>
					<div className="text-underline-hover">Back to {type} vans</div>
				</div>
			</Link>
			<div className="ratio ratio-1x1 mt-4 mb-5">
				<img src={van.imageUrl} className="img-fluid object-fit-cover rounded"/>
			</div>
			<VanType type={van.type}></VanType>
			<div className="fw-bold fs-2 mt-2">{van.name}</div>
			<div className="mb-2">
				<span className="fw-bold fs-4">${van.price}</span><span>/day</span>
			</div>
			<div>{van.description}</div>
			<button className="bg-btn w-100 border-0 rounded text-light fs-sm py-2 px-4 mt-3 mb-5">Rent this van</button>
  	</div>
  )
}