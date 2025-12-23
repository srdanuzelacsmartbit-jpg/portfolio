import Logo from "./Logo"

export default function Navbar() {
	return (
		<nav className="h-18 fixed z-50 w-full">
			<div className="flex items-center h-full justify-between w-[90%] m-auto">
				{/* LOGO */}
				<Logo />
			</div>

		</nav>
	)
}
