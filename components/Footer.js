import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer z-10 bg-gray-800 sticky bottom-">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-300 text-sm text-center sm:text-left">
                    © 2023 —
                    <Link
                        href="#"
                        rel="noopener noreferrer"
                        className="text-gray-400 ml-1"
                        target="_blank"
                    >
                        @mhuala
                    </Link>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <Link
                        href="https://instagram.com/nachohuala"
                        className="ml-3 text-gray-500 hover:text-gray-200"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/manuel-huala/"
                        className="ml-3 text-gray-500 hover:text-gray-200"
                    >
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </Link>
                    <Link
                        href="https://github.com/mhuala/"
                        className="ml-2 text-gray-500 hover:text-gray-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            viewBox="-74.4 -120.90175 644.8 725.4105"
                        >
                            <path d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://app.datacamp.com/portfolio/manuelhuala"
                        className="ml-2 text-gray-500 hover:text-gray-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-4 h-4 mt-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12.946 18.151v-5.239L21.209 8.2 19.2 7.048l-6.254 3.567V5.36c0-.356-.192-.689-.5-.866L4.922.177a1.434 1.434 0 0 0-1.455.044 1.438 1.438 0 0 0-.676 1.224v14.777A1.44 1.44 0 0 0 4.92 17.49l6.032-3.44v4.683a1 1 0 0 0 .504.867l7.73 4.4 2.01-1.152-8.25-4.697zM10.953 5.938v5.814L4.785 15.27V2.4l6.168 3.539v-.001z" />
                        </svg>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Footer;
