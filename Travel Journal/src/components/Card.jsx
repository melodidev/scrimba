export default function Card({ isLastItem, imageUrl, location, googleMapsUrl, title, startDate, endDate, description }) {
  return ( 
    <div className="mx-5 my-4">
      <div className="row">
        <div className="col-sm-3 col-12">
          <img src={imageUrl} alt="#" className="img-fluid rounded" />
        </div>
        <div className="col-sm-9 col-12">
          <div className="d-flex align-items-center mt-3">
            <i className="fa-solid fa-location-dot text-red me-1"></i>
            <div className="fw-semibold text-uppercase letter-spacing-sm me-3">{location}</div>
            <a className="text-grey text-red-hover" href={googleMapsUrl}>View on Google Maps</a>
          </div>
          <div className="fs-3 fw-bold mt-1 mb-2">{title}</div>
          <div className="fw-semibold mb-1">{startDate} - {endDate}</div>
          <div>{description}</div>
        </div>
        {!isLastItem && <div className="border-bottom border-2 mt-4" />}
      </div>      
    </div>
  )
}
