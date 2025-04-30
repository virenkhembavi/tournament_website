import { Link } from "react-router-dom"
// import logo from "../assets/logo.png"

function Footer() {
    return (
        <footer className="bg-[#1a1e3c] text-white py-8 md:py-12">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-10">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h1 className="text-xl md:text-2xl font-bold mb-2">
                            t
                            <img
                                src={"https://www.toornament.com/media/8253243463000877227/original"}
                                alt="O"
                                className="inline-block w-5 h-5 md:w-6 md:h-6 rounded-full mx-1"
                            />
                            rnament
                        </h1>
                        <p className="text-xs md:text-sm">Everything you need for esports competitions</p>
                        <p className="text-xs mt-4 text-gray-400">© 2023 Toornament - All Rights reserved</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-sm font-semibold mb-2 md:mb-3">Toornament</h3>
                            <ul className="text-xs space-y-1.5 md:space-y-2 text-gray-300">
                                <li>
                                    <Link>For players & teams</Link>
                                </li>
                                <li>
                                    <Link>For tournament organizers</Link>
                                </li>
                                <li>
                                    <Link>About us</Link>
                                </li>
                                <li>
                                    <Link >Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="text-sm font-semibold mb-2 md:mb-3">Features & products</h3>
                            <ul className="text-xs space-y-1.5 md:space-y-2 text-gray-300">
                                <li>
                                    <Link >Organizer software</Link>
                                </li>
                                <li>
                                    <Link >Tournament Boost</Link>
                                </li>
                                <li>
                                    <Link >Professional Circuit</Link>
                                </li>
                                <li>
                                    <Link >White-label Platform</Link>
                                </li>
                                <li>
                                    <Link >Developer API</Link>
                                </li>
                                <li>
                                    <Link >Pricing</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center md:text-left col-span-2 sm:col-span-1">
                            <h3 className="text-sm font-semibold mb-2 md:mb-3">Resources</h3>
                            <ul className="text-xs space-y-1.5 md:space-y-2 text-gray-300">
                                <li>
                                    <Link >Blog</Link>
                                </li>
                                <li>
                                    <Link >Help center</Link>
                                </li>
                                <li>
                                    <Link >Developer doc</Link>
                                </li>
                                <li>
                                    <Link >Terms of use</Link>
                                </li>
                                <li>
                                    <Link >Privacy policy</Link>
                                </li>
                                <li>
                                    <Link >Cookies policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 justify-center md:justify-start">
                    <Link className="text-gray-400 hover:text-white">
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
                            className="w-5 h-5"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </Link>
                    <Link className="text-gray-400 hover:text-white">
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
                            className="w-5 h-5"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </Link>
                    <Link className="text-gray-400 hover:text-white">
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
                            className="w-5 h-5"
                        >
                            <circle cx="9" cy="12" r="1" />
                            <circle cx="15" cy="12" r="1" />
                            <path d="M7.5 7.2A4.8 4.8 0 0 1 9 7h6a4.8 4.8 0 0 1 1.5.2" />
                            <path d="M14 7a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
                            <path d="M7 16.8c.5.3 1 .5 1.5.7 1 .3 2.2.5 3.5.5s2.5-.2 3.5-.5c.5-.2 1-.4 1.5-.7" />
                            <path d="M3 6.5a14 14 0 0 1 18 0" />
                            <path d="M3 17.5a14 14 0 0 0 18 0" />
                        </svg>
                    </Link>
                    <Link className="text-gray-400 hover:text-white">
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
                            className="w-5 h-5"
                        >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
