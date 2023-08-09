export default function VanType({type}) {
	function createClassForVanType(type) {
		let className = "fs-sm text-light rounded py-1 text-center width-100 ";
		if (type == "simple") {
			className += "bg-simple";
		} else if (type == "rugged") {
			className += "bg-rugged";
		} else {
			className += "bg-dark";
		}
		return className;
	}

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	return (
	  <div className={createClassForVanType(type)}>{capitalize(type)}</div>
	)
}