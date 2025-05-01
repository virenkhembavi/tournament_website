import { Link } from "react-router-dom"

function Features() {
    return (
        <section className="py-8 md:py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-10">Advanced features and products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 md:p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
                        >
                            <div className="mb-3 md:mb-4">
                                <img
                                    src={feature.icon || "/placeholder.svg"}
                                    alt={feature.title}
                                    className="w-[70px] h-[70px] md:w-20 md:h-20"
                                />
                            </div>
                            <h3 className="font-bold text-sm md:text-base mb-1 md:mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6 md:mt-8">
                    <Link
                        className="border border-blue-500 text-blue-500 px-4 md:px-6 py-1.5 md:py-2 rounded text-xs md:text-sm"
                    >
                        Compare products and pricing
                    </Link>
                </div>
            </div>
        </section>
    )
}

const features = [
    {
        title: "Tournament Boost",
        icon: "https://www.toornament.com/media/8559703539012976640/original",
        description: "Unlock advanced organizer features for 1 tournament, once for all",
    },
    {
        title: "Professional Circuit",
        icon: "https://www.toornament.com/media/8559705529025110016/original",
        description: "Unlock all features for your competition project and manage circuits",
    },
    {
        title: "White-label Platform",
        icon: "https://www.toornament.com/media/8559706501329248256/original",
        description: "Your customizable gaming platform on your domain name for all your competitions",
    },
    {
        title: "Developer API",
        icon: "https://www.toornament.com/media/8559706019589120000/original",
        description: "Freely create your own custom projects for your game or for your community",
    },
]

export default Features
