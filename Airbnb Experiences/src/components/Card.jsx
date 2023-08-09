import "../App.css"
import star from "../assets/star.png"

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }

  return (
    <div className="col-lg-3 col-sm-4 col-12 fs-sm">
      <div className="position-relative">
        <img src={`../public/images/${props.img}`} alt="#" className="img-fluid rounded mb-2" />
        {badgeText && <div className="position-absolute top-0 bg-light rounded fw-semibold mt-2 ms-2 py-1 px-2">{badgeText}</div>}
      </div>
      <div className="d-flex align-items-center gap-1">
        <img src={star} alt="#" className="star" />
        <div>{props.rating}</div>
        <div className="text-grey">{props.reviewCount} • {props.location}</div>
      </div>
      <div>{props.title}</div>
      <div className="d-flex align-items-center gap-1">
        <div className="fw-semibold">From ${props.price}</div>
        <div>/ person</div>
      </div>
    </div>
  )
}