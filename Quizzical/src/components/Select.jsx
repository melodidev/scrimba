import React from "react"

export default function Select(props) {
  
  return (
    <div className="row my-2">
      <label htmlFor={props.name} className="col-3 col-form-label fw-semibold">{props.label}:</label>
      <div className="col-9">
        <select className="form-select shadow-sm" id={props.name} name={props.name}>
          <option value="">Any {props.label}</option>
          {Object.entries(props.options).map(([value, label]) => (
            <option value={value} key={value}>{label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
