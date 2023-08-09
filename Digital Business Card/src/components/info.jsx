import img from "../assets/mermaid-1.jpg"

export default function Info() {
  return ( 
    <div>
      {/* Mermaid by Evariste Vital Luminais */}
      <img src={img} alt="mermaid" className="img-fluid rounded-top" />
      <div className="text-center fs-3 fw-bold mt-3">Melodi</div>
      <div className="text-center text-yellow">Full Stack Web Developer</div>
      <div className="d-flex justify-content-center">
        <a href="https://melodi.dev/" className="text-decoration-none text-light">melodi.dev</a>
      </div>
      <div className="d-flex justify-content-between mx-4 my-3">
        <button type="button" className="btn bg-light text-dark hover-color py-1 px-4"><i className="fa-solid fa-envelope me-2"></i>Email</button>
        <button type="button" className="btn bg-blue text-light py-1 px-3"><i className="fa-brands fa-linkedin me-2"></i>LinkedIn</button>
      </div>
    </div>
  )
}