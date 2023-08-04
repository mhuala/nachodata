"use client";
import Markdown from "markdown-to-jsx";
import { useEffect, useState, useRef } from "react";
import { useHeadings, useScrollSpy } from "../../utils/hooks";

import Code from "../Markdown/Code";
import YoutubeVideo from "../Markdown/YoutubeVideo";
import PowerBI from "../Markdown/PowerBI";
import Photo from "../Markdown/Photo";
import Url from "../Markdown/Url";
import H2 from "../Markdown/H2";
import H3 from "../Markdown/H3";
import H4 from "../Markdown/H4";
import H5 from "../Markdown/H5";

const PostContent = ({ children }) => {
    const [visibleTableOfContent, setVisibleTableOfContent] = useState(false);
    const headings = useHeadings();
    const activeId = useScrollSpy(
        headings.map(({ id }) => id),
        { rootMargin: "0% 0% -25% 0%" }
    );

    return (
        <div className="font-sans text-base xl:text-lg 2xl:text-xl">
            {/* CONTENIDO post */}
            <Markdown
                options={{
                    overrides: {
                        Code: { component: Code },
                        H2: { component: H2 },
                        H3: { component: H3 },
                        H4: { component: H4 },
                        H5: { component: H5 },
                        Photo: { component: Photo },
                        PoweBI: { component: PowerBI },
                        Url: { component: Url },
                        YoutubeVIdeo: { component: YoutubeVideo },
                    },
                }}
            >
                {children}
            </Markdown>

            {/* TABLE OF CONTENTS HACER SIDEBAR PLEGABLE PARA MOVIL*/}
            <div className={visibleTableOfContent ? "block" : "hidden"}>
                <nav
                    style={{ position: "fixed", top: "8em", right: "0" }}
                    className="bg-slate-800 rounded-fulll z-10 p-2"
                >
                    <ul className="text-white">
                        <h1>Tabla de contenidos</h1>
                        {headings.map((heading) => (
                            <li
                                key={heading.id}
                                style={{ marginLeft: `${heading.level}em` }}
                            >
                                <a
                                    href={`#${heading.id}`}
                                    style={{
                                        fontWeight:
                                            activeId === heading.id
                                                ? "bold"
                                                : "normal",
                                    }}
                                >
                                    {heading.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* FLOATING BUTTON */}
            <div class="fixed bottom-0 right-0 p-2  flex items-end justify-end w-24 h-24 z-40">
                <button
                    onClick={() => {
                        setVisibleTableOfContent(!visibleTableOfContent);
                    }}
                    className="text-white shadow-xl flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 absolute"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        class="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
export default PostContent;
