import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
	const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState(null);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from || "/host";

	function handleSubmit(e) {
		e.preventDefault();
		setStatus("submitting");

		loginUser(loginFormData)
			.then(data => {
				setError(null)
				localStorage.setItem("loggedin", true)
				navigate("/host", { replace: true })
			})
			.catch(err => {
				setError(err)
			})
			.finally(() => {
				setStatus("idle")
			})
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setLoginFormData(prev => ({
			...prev,
			[name]: value
		}));
	}

	return (
		<div className="mx-3 mt-4 mb-5">
			{location.state?.message &&
				<div className="text-center fs-sm fw-bold text-danger my-3">{location.state.message}</div>
			}
			<div className="fw-bold fs-2 text-center mb-3">Sign in to your account</div>
			{error?.message &&
				<div className="text-center fs-sm fw-bold text-danger my-3">{error.message}</div>
			}
			<form onSubmit={handleSubmit} >
				<input
					name="email"
					onChange={handleChange}
					type="email"
					placeholder="Email address"
					value={loginFormData.email}
					className="fs-sm w-100 border border-1 border-secondary-emphasis rounded-top outline-none fw-normal py-1 ps-2"
				/>
				<input
					name="password"
					onChange={handleChange}
					type="password"
					placeholder="Password"
					value={loginFormData.password}
					className="fs-sm w-100 border border-1 border-secondary-emphasis rounded-bottom outline-none fw-normal py-1 ps-2"
				/>
				<button disabled={status == "submitting"} className="border-0 w-100 rounded bg-btn py-2 fs-sm text-light my-3">
					{status == "submitting" ? "Logging in..." : "Log in"}
				</button>
			</form>
		</div>
	)

}