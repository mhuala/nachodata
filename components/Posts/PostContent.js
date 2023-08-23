"use client";
import { useEffect, useState, useRef } from "react";
import { useHeadings, useScrollSpy } from "../../utils/hooks";
import Markdown from "markdown-to-jsx";
import Code from "../Markdown/Code";
import YoutubeVideo from "../Markdown/YoutubeVideo";
import Photo from "../Markdown/Photo";
import ButtonUrl from "../Markdown/ButtonUrl";
import Repository from "../Markdown/Repository";
import Badge from "../Markdown/Badge";
import Note from "../Markdown/Note";
import PowerBi from "../Markdown/PowerBI";
import Url from "../Markdown/Url";



const PostContent = ({ children }) => {
    const [visibleTableOfContent, setVisibleTableOfContent] = useState(false);
    const headings = useHeadings();
    const activeId = useScrollSpy(
        headings.map(({ id }) => id),
        { rootMargin: "0% 0% -25% 0%" }
    );

    return (
        <>
            <div id="markdown" className="text-xl font-sans animate-fade-left">
                {/* CONTENIDO post */}
                <Markdown
                    options={{
                        overrides: {
                            Code: { component: Code },
                            Photo: { component: Photo },
                            PowerBi: { component: PowerBi },
                            ButtonUrl: { component: ButtonUrl },
                            YoutubeVideo: { component: YoutubeVideo },
                            Repository: {component: Repository},
                            Note: {component: Note},
                            Badge: {component: Badge},
                            Url:{component:Url}
                        },
                    }}
                >
                    {children}
                </Markdown>

                {/* TABLE OF CONTENTS HACER SIDEBAR PLEGABLE PARA MOVIL*/}
            </div>
            <div className={visibleTableOfContent ? "block" : "hidden"}>
                <nav
                    style={{ position: "fixed", top: "8em", right: "0" }}
                    className="bg-slate-900 border rounded-l-lg z-10"
                >
                    <ul className="text-white font-thin p-4">
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
                                className=" flex gap-1"
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
            <div className="fixed bottom-0 right-4 p-2  flex items-end justify-end z-40 transform hover:-translate-y-2 transition-transform duration-500 ease-in-out">
                <button
                    id="floating"
                    onClick={() => {
                        setVisibleTableOfContent(!visibleTableOfContent);
                    }}
                    className=""
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
        </>
    );
};
export default PostContent;
