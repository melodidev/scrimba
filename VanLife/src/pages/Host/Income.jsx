import img from "../../assets/images/income.png";

export default function Income() {
	const transactionsData = [
		{ amount: 720, date: "1/12/22", id: "1" },
		{ amount: 560, date: "10/11/22", id: "2" },
		{ amount: 980, date: "23/11/22", id: "3" },
	]
	return (
		<div className="mt-4 mb-4">
			<div className="mx-3">
				<div className="fs-2 fw-bold">Income</div>
				<div className="fs-sm text-grey my-2">Last<span className="fw-bold text-decoration-underline ms-1">30 days</span></div>
				<div className="display-5 fw-bold">$2,260</div>
			</div>
			<img src={img} className="img-fluid my-4" />
			<div className="mx-3">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fw-bold fs-5">Your transactions (3)</div>
					<div className="fs-sm text-grey">Last<span className="fw-bold text-decoration-underline ms-1">30 days</span></div>
				</div>
				<div className="mt-3 mb-5">
					{transactionsData.map((item) => (
						<div key={item.id} className="d-flex justify-content-between align-items-center bg-white rounded px-3 py-2 mb-2" >
							<div className="fw-semibold fs-2">${item.amount}</div>
							<div className="fs-sm text-grey">{item.date}</div>
						</div>
					))}		
				</div>
			</div>
		</div>
	)
}
