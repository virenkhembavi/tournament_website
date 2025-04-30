import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
// import logo from "../assets/logo.png"

function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="bg-[#1a1e3c] text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4 md:gap-8">
                    <Link className="flex items-center">
                        <img src={"https://www.toornament.com/media/8253243463000877227/original"} alt="Toornament Logo" className="w-8 h-8 rounded-full" />
                    </Link>
                    <div className="hidden md:flex gap-6">
                        <button className="flex items-center gap-1 text-sm whitespace-nowrap">
                            For players and teams <ChevronDown className="h-4 w-4" />
                        </button>
                        <button className="flex items-center gap-1 text-sm whitespace-nowrap">
                            For tournament organizers <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-3 items-center">
                    <div className="md:hidden">
                        <button className="text-white p-2" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6"
                            >
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                    <Link

                        className="border border-blue-500 text-blue-500 px-3 md:px-4 py-1 rounded text-sm whitespace-nowrap"
                    >
                        Play
                    </Link>
                    <Link className="border order-blue-500 text-blue-500 px-3 md:px-4 py-1 rounded text-sm whitespace-nowrap">
                        Organize
                    </Link>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden mt-4 p-4 bg-[#232850] rounded-md">
                    <div className="flex flex-col space-y-4">
                        <Link to="/players" className="text-sm flex items-center gap-1">
                            For players and teams <ChevronDown className="h-4 w-4" />
                        </Link>
                        <Link to="/organizers" className="text-sm flex items-center gap-1">
                            For tournament organizers <ChevronDown className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
