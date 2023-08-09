import { NavLink, Outlet } from "react-router-dom";
export default function HostLayout() {
	return (
		<>
			<nav className="px-3">
				<NavLink
					to="."
					end
					className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-semibold" : "text-decoration-none text-grey"}
				>
					Dashboard
				</NavLink>
				<NavLink
					to="income"
					className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-semibold mx-3" : "text-decoration-none text-grey mx-3"}
				>
					Income
				</NavLink>
				<NavLink
					to="vans"
					className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-semibold me-3" : "text-decoration-none text-grey me-3"}
				>
					Vans
				</NavLink>
				<NavLink
					to="reviews"
					className={({isActive}) => isActive ? "text-decoration-underline text-dark fw-semibold" : "text-decoration-none text-grey"}
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	)
}