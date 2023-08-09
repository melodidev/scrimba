import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";

export default function HostVans() {
	const [vans, setVans] = useState([]);
	const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

	useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [])

	if (loading) return (<div className="mx-3 fs-2 fw-bold mb-5">Loading...</div>)
	if (error) return (<div className="mx-3 fs-2 fw-bold mb-5">Error: {error.message}</div>)

	return (
		<div className="mx-3 mb-4">
			<div className="fw-bold fs-2 mt-4 mb-3">Your listed vans</div>
			{vans.map((van, i) => (
				<div key={i} className="bg-white rounded px-3 py-2 mb-2">
					<Link to={van.id} className="text-decoration-none">
						<div className="row">
							<div className="col-3">
								<img src={van.imageUrl} className="rounded img-fluid" />
							</div>
							<div className="col-9 mt-2">
								<div className="fw-semibold text-dark">{van.name}</div>
								<div className="text-grey fs-sm">${van.price}/day</div>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	)
}