import img from "../../assets/images/reviews.png";

export default function Reviews() {
	const reviewsData = [
		{
			rating: 5,
			name: "Elliot",
			date: "January 3, 2023",
			text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
			id: "1",
		},
		{
			rating: 5,
			name: "Sandy",
			date: "December 12, 2022",
			text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
			id: "2",
		},
	]
	
	return (
		<div>
			<div className="d-flex align-items-center mt-4 ms-3">
				<div className="fw-bold fs-2 mb-3">Your reviews</div>
				<div className="fs-sm text-grey ms-3 mb-2">Last <span className="text-decoration-underline fw-bold ms-1">30 days</span></div>
			</div>
			<div className="d-flex align-items-center ms-3 mb-1">
				<div className="fs-2 fw-bold">5.0</div>
				<i className="fa-solid fa-star color-star mx-1"></i>
				<div className="fs-sm text-dark">overall rating</div>
			</div>
			<img src={img} className="img-fluid" />
			<div className="mx-3 mb-5">
				<div className="fw-bold mt-3">Reviews (2)</div>
				{reviewsData.map((review) => (
					<div key={review.id} className="fs-sm border-bottom border-2 pb-3 mt-3">
						{[...Array(review.rating)].map((_, i) => ( <i className="fa-solid fa-star color-star"></i> ))}
						<div className="d-flex align-items-center my-2">
							<div className="fw-bold me-2">{review.name}</div>
							<div className="text-grey">{review.date}</div>
						</div>
						<div>{review.text}</div>
					</div>
				))}

			</div>
		</div>
		/*
			{reviewsData.map((review) => (
				<div key={review.id}>
					<div className="review">
						{[...Array(review.rating)].map((_, i) => (
							<i className="fa-solid fa-star color-star"></i>
						))}
						<div className="info">
							<p className="name">{review.name}</p>
							<p className="date">{review.date}</p>
						</div>
						<p>{review.text}</p>
					</div>
					<hr />
				</div>
			))}
		*/
	)
}
