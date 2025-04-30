import { Link } from "react-router-dom"
// import placeholderImage from "../assets/placeholder.png"

function GameIcons() {
    return (
        <section className="bg-[#1a1e3c] text-white pb-6 md:pb-10">
            <div className=" mx-auto px-4">
                <div className="flex justify-center gap-1 md:gap-2 overflow-x-auto py-4 no-scrollbar">
                    {games.map((game, index) => (
                        <div
                            key={index}
                        // className="relative min-w-[60px] h-[60px] sm:min-w-[70px] sm:h-[70px] md:min-w-[80px] md:h-[80px]"
                        >
                            <img src={game.image || "/placeholder.svg"} alt={game.name} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 md:mt-6">
                    <Link
                        className="border border-blue-500 text-blue-500 px-4 md:px-6 py-1.5 md:py-2 rounded text-xs md:text-sm"
                    >
                        All competitions and games
                    </Link>
                </div>
            </div>
        </section>
    )
}

const games = [
    { name: "LEAGUE OF LEGENDS", image: "https://www.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg" },
    { name: "FIFA", image: "https://www.toornament.com/disciplines/ea_fc25/img/cover-225x300-medium.jpg" },
    { name: "MOBILE LEGENDS", image: "https://www.toornament.com/disciplines/mobile_legends/img/cover-225x300-medium.jpg" },
    { name: "FORTNITE", image: "https://www.toornament.com/disciplines/fortnite/img/cover-225x300-medium.jpg" },
    { name: "VALORANT", image: "https://www.toornament.com/disciplines/valorant/img/cover-225x300-medium.jpg" },
    { name: "PUBG", image: "https://www.toornament.com/disciplines/pubg_mobile/img/cover-225x300-medium.jpg" },
    { name: "ROCKET LEAGUE", image: "https://www.toornament.com/disciplines/rocketleague/img/cover-225x300-medium.jpg" },
]

export default GameIcons
