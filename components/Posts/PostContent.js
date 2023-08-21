"use client";
import Markdown from "markdown-to-jsx";
import { useEffect, useState, useRef } from "react";
import { useHeadings, useScrollSpy } from "../../utils/hooks";
import { Tooltip as ReactTooltip } from "react-tooltip";

import Code from "../Markdown/Code";
import YoutubeVideo from "../Markdown/YoutubeVideo";
import PowerBI from "../Markdown/PowerBI";
import Photo from "../Markdown/Photo";
import Url from "../Markdown/Url";
import Repository from "../Markdown/Repository";
import Cite from "../Markdown/Cite";
import Note from "../Markdown/Note";

const PostContent = ({ children }) => {
    const [visibleTableOfContent, setVisibleTableOfContent] = useState(false);
    const headings = useHeadings();
    const activeId = useScrollSpy(
        headings.map(({ id }) => id),
        { rootMargin: "0% 0% -25% 0%" }
    );

    return (
        <div id="markdown" className="text-lg font-thin text-justify">
            {/* CONTENIDO post */}
            <Markdown
                options={{
                    overrides: {
                        Code: { component: Code },
                        Photo: { component: Photo },
                        PoweBI: { component: PowerBI },
                        Url: { component: Url },
                        YoutubeVIdeo: { component: YoutubeVideo },
                        Repository: {component: Repository},
                        Note: {component: Note},
                        Cite: {component: Cite}
                    },
                }}
            >
                {children}
            </Markdown>

            {/* TABLE OF CONTENTS HACER SIDEBAR PLEGABLE PARA MOVIL*/}
            <div className={visibleTableOfContent ? "block" : "hidden"}>
                <nav
                    style={{ position: "fixed", top: "8em", right: "0" }}
                    className="bg-slate-900 border rounded-l-lg z-10"
                >
                    <ul className="text-white p-4">
                        <div className="flex flex-row gap-2 items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="white"
                                viewBox="-5.5 0 32 32"
                                >
                                <path d="M18.875 15.719v4.438h2.375v5.656h-5.656v-5.656h2.344v-3.5h-6.844v3.5h2.375v5.656H7.781v-5.656h2.375v-3.5H3.312v3.5h2.344v5.656H0v-5.656h2.375v-4.438h7.781v-3.438H7.093V6.625h7.063v5.656h-3.063v3.438h7.781z" />
                            </svg>
                                <h1 className="text-xl font-extrabold ">TABLA DE CONTENIDOS</h1>
                        </div>
                        {headings.map((heading) => (
                            <li
                                key={heading.id}
                                style={{ marginLeft: `${heading.level}em` }}
                                className="font-mono flex gap-1"
                            >
                                • 
                                <a
                                    href={`#${heading.id}`}
                                    style={{
                                        fontWeight:
                                            activeId === heading.id
                                                ? "bold"
                                                : "normal",
                                        textDecoration:
                                            activeId === heading.id
                                                ? "underline double hotpink"
                                                : ""
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
            <div data-tooltip-id="floating-button-tooltip" class="fixed bottom-0 right-0 p-2  flex items-end justify-end w-24 h-24 z-40">
                <button
                    onClick={() => {
                        setVisibleTableOfContent(!visibleTableOfContent);
                    }}
                    className="text-white shadow-xl flex items-center justify-center rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#8b5cf6"
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

            <ReactTooltip
                id="floating-button-tooltip"
                place="left"
                content="Tabla de contenidos"
            />
        </div>
    );
};
export default PostContent;
