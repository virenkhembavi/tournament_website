
function Partners() {
    return (
        <section className="py-8 md:py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-10">Trusted by</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8">
                    {partners.slice(0, 5).map((partner, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img
                                src={partner.logo || "/placeholder.svg"}
                                alt={partner.name}
                                className="object-contain h-6 sm:h-7 md:h-8 lg:h-10"
                            />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
                    {partners.slice(5, 10).map((partner, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img
                                src={partner.logo || "/placeholder.svg"}
                                alt={partner.name}
                                className="object-contain h-6 sm:h-7 md:h-8 lg:h-10"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const partners = [
    { name: "Ubisoft", logo: "https://www.toornament.com/media/8550807148646449152/original" },
    { name: "EA", logo: "https://www.toornament.com/media/8550807491034882048/original" },
    { name: "Moonton", logo: "https://www.toornament.com/media/8550807884661825536/original" },
    { name: "Wargaming", logo: "https://www.toornament.com/media/8550808369726078976/original" },
    { name: "Riot Games", logo: "https://www.toornament.com/media/8550808722818441216/original" },
    { name: "Red Bull", logo: "https://www.toornament.com/media/8550809821860241408/original" },
    { name: "PGL", logo: "https://www.toornament.com/media/8550810111738494976/original" },
    { name: "Webedia", logo: "https://www.toornament.com/media/8550810431946481664/original" },
    { name: "Logitech", logo: "https://www.toornament.com/media/8550810689143226368/original" },
    { name: "Vitality", logo: "https://www.toornament.com/media/8550811140081205248/original" },
]

export default Partners
