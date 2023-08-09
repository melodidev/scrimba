import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
	const { van } = useOutletContext();

	return (
		<div>
			<div className="row">
				<div className="col-3">
					<img src={van.imageUrl} className="img-fluid rounded" />
				</div>
			</div>
		</div>
	)
}