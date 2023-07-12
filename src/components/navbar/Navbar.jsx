import Logo from "./Logo"

const Navbar = () => {
    return (
        <nav className="py-5 bg-red-300 flex flex-row w-full fixed top-0 z-20 overflow-x-auto">
            {/* Left */}
            <Logo />
            <p>Right Side</p>
        </nav>
    )
}

export default Navbar
