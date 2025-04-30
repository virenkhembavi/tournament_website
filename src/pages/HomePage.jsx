import Features from "../components/features/Features"
import Footer from "../components/footer/Footer"
import GameIcons from "../components/gameIcons/GameIcons"
import Hero from "../components/hero/Hero"
import Navigation from "../components/navbar/Navigation"
import Partners from "../components/partners/Partners"
import PlayerOrganizerSection from "../components/playerOrganizerSection/PlayerOrganizerSection"


function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <Hero />
            <GameIcons />
            <PlayerOrganizerSection />
            <Features />
            <Partners />
            <Footer />
        </div>
    )
}

export default HomePage
