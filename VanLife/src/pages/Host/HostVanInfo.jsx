import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
	const { van } = useOutletContext();

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	return (
		<div className="fs-sm">
			<div><span className="fw-bold me-1">Name:</span>{van.name}</div>
			<div className="my-2"><span className="fw-bold me-1">Category:</span>{capitalize(van.type)}</div>
			<div><span className="fw-bold me-1">Description:</span>{van.description}</div>
		</div>
	)
}