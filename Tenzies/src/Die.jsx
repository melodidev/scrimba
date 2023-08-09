export default function Die(props) {

  let styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <button onClick={props.handleClick} style={styles} className="border-none border-bottom shadow-sm fs-4 fw-semibold rounded px-3 py-1">{props.value}</button>
  )
}