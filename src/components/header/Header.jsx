import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"

const Header = () => {
    return (
        <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
        </header>
    )
}

export default Header
