import { Link } from "react-router-dom"
// import playersIcon from "../assets/players-icon.png"
// import organizersIcon from "../assets/organizers-icon.png"
// import playersDashboard from "../assets/players-dashboard.png"
// import organizersDashboard from "../assets/organizers-dashboard.png"

function PlayerOrganizerSection() {
    return (
        <section className="py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-10">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-3 md:mb-4">
                        <img src={"https://www.toornament.com/media/8550787924606566400/original"} alt="Players Icon" className="w-9 h-9 md:w-10 md:h-10" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">For players and teams</h2>
                    <div className="mb-4 md:mb-6 h-[160px] sm:h-[180px] md:h-[200px] w-full relative">
                        <img
                            src={"https://www.toornament.com/media/8551889822921703424/original"}
                            alt="Players Dashboard"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                        Thousands of tournaments every week, on all the best games, for all playing levels, all over the world
                    </p>
                    <Link
                        className="bg-blue-500 text-white px-4 md:px-6 py-1.5 md:py-2 rounded text-xs md:text-sm w-full sm:w-auto"
                    >
                        Explore tournaments
                    </Link>
                </div>

                <div className="flex flex-col items-center text-center mt-8 md:mt-0">
                    <div className="mb-3 md:mb-4">
                        <img src={"https://www.toornament.com/media/8550801925998338048/original"} alt="Organizers Icon" className="w-9 h-9 md:w-10 md:h-10" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">For tournament organizers</h2>
                    <div className="mb-4 md:mb-6 h-[160px] sm:h-[180px] md:h-[200px] w-full relative">
                        <img
                            src={"https://www.toornament.com/media/8551802734167252992/original"}
                            alt="Organizers Dashboard"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                        Easily manage all your tournaments and leagues whatever the game and the format with a wide choice of
                        settings
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Link
                            className="bg-blue-500 text-white px-4 md:px-6 py-1.5 md:py-2 rounded text-xs md:text-sm text-center"
                        >
                            Discover organizer software
                        </Link>
                        <Link
                            className="border border-blue-500 text-blue-500 px-4 md:px-6 py-1.5 md:py-2 rounded text-xs md:text-sm text-center"
                        >
                            Start organizing
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlayerOrganizerSection
