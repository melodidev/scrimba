import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
	const { van } = useOutletContext();

	return (
		<div><span className="fs-4 fw-semibold">${van.price}.00</span><span className="text-grey">/day</span></div>
	)
}
