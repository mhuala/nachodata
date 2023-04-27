"use client"
import Markdown from "markdown-to-jsx";
import Code from "./Code"
import { useEffect,useState,useRef } from "react";
import { useHeadings,useScrollSpy } from "../utils/hooks"


const PostContent = ({children}) => {
    const headings = useHeadings()
    const activeId = useScrollSpy(
        headings.map(({ id }) => id),
        { rootMargin: "0% 0% -25% 0%" }
    );
    return (
        <>
        {/* CONTENIDO post */}
        <Markdown options= {{
            overrides:{
                Code:{
                    component:Code
                }
            }
        }}>
        {children}
        </Markdown>

        {/* TABLE OF CONTENTS HACER SIDEBAR PLEGABLE PARA MOVIL*/}
        <nav style={{ position: 'fixed', top: '8em', right: '1em' }} className="z-10">
            <ul className="text-white">
                <h1>Table of Content</h1>
              {headings.map(heading => (
                <li key={heading.id} style={{ marginLeft: `${heading.level}em` }}>
                  <a 
                    href={`#${heading.id}`} 
                    style={{ 
                        fontWeight: activeId === heading.id ? "bold" : "normal" 
                      }}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
    );
}
export default PostContent; 