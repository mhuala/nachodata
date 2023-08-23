"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AboutIcon, ContactIcon, ProjectsIcon } from "@/public/icons/icons";

// TODO:
// 1. Animación svg menu movil al abrir se transforma en X y al ceerrar vuelve normal
// 2. Hover en opciones de menú movil animado
// 3. Revisar fuentes
// 4. Ver que al hacer click en una página del menú movil este se retraiga

export default function Navbar() {
    const [isClicked, setisClicked] = useState(false);

    return (
        <nav className="bg-slate-800 rounded-b-xl ">
            <div className="flex mx-auto px-2 h-24  lg:h-1/10">
                <nav className="py-6 flex w-full items-center mx-auto justify-between px-4 md:px-16 2xl:px-48">
                    {/* PRIMARY NAVBAR */}
                    <div className="flex flex-row gap-2 items-center mx-auto md:mx-0 px-6 md:justify-none">
                        <Link href="/" className="clickeable">
                            <Image
                                src="webImages/logo.png"
                                alt="logo"
                                width="0"
                                height="0"
                                className=" h-16 w-16"
                            />
                        </Link>
                        <span className="text-white font-semibold text-2xl">
                            nachodata
                        </span>
                    </div>
                    {/* SECONDARY NAVBAR */}
                    <div className=" hidden md:flex flex-row justify-center items-center space-x-8">
                        {/* First section */}
                        <div className="flex flex-row items-center space-x-8">
                            <Link href="/about" className="clickeable ">
                                <span className="text-[#9EACE1] font-bold font-rale lg:text-lg">
                                    ACERCA
                                </span>
                            </Link>
                            <Link href="/contact" className="clickeable">
                                <span className="text-[#9EACE1] font-bold font-rale lg:text-lg">
                                    CONTACTO
                                </span>
                            </Link>
                        </div>
                        {/* Secondary Section */}
                        <div className="w-0.5 h-6 bg-gray-400 opacity-50"></div>
                        <button
                            type="submit"
                            className="flex items-center mx-auto w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-500 dark:text-gray-900 transform hover:-translate-y-2 hover:bg-indigo-500 transition-transform duration-500 ease-in-out"
                        >
                            <Link
                                href="/search"
                                className="text-white flex items-center space-x-2 "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                    />
                                </svg>
                                <span className="">PROYECTOS</span>
                            </Link>
                        </button>
                    </div>
                    {/* MOBILE BUTTON */}
                    <div className="items-center md:hidden mr-10 ">
                        <button
                            onClick={() => setisClicked(!isClicked)}
                            className="h-24 text-[#9EACE1]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
            {/* MOBILE MENU */}
            <div
                className={
                    isClicked
                        ? "flex flex-col md:hidden space-y-1 bg-gray-800 text-[#9EACE1] text-xl bg-brand w-full rounded-b-xl "
                        : "hidden"
                }
            >
                <div className="border border-slate-400 mx-6 my-6 bg-slate-600">
                    <button onClick={() => setisClicked(!isClicked)}
                            className="flex hover:bg-slate-700 p-2 space-x-4 items-center clickeable text-center mx-auto w-full px-6">
                        <Link
                            href="/about"
                            className="flex hover:bg-slate-700 p-2 space-x-4 items-center clickeable text-center mx-auto w-full px-6">
                        
                            <AboutIcon />
                            <span className="text-center font-semibold">Sobre mí</span>
                        </Link>
                    </button>
                    <button onClick={() => setisClicked(!isClicked)}
                            className="flex hover:bg-slate-700 p-2 space-x-4 items-center clickeable text-center mx-auto w-full px-6">
                        <Link
                            href="/contact"
                            className="flex hover:bg-slate-700 p-2 space-x-4 items-center clickeable text-center mx-auto w-full px-6"
                        >
                            <ContactIcon />
                            <span className="text-center font-semibold">Contacto</span>
                        </Link>
                    </button>
                    <button onClick={() => setisClicked(!isClicked)}
                            className="flex hover:bg-slate-700 p-2 space-x-4 items-center clickeable text-center mx-auto w-full px-6">
                        <Link
                            href="/search"
                            className="flex hover:bg-slate-700 p-2 space-x-4 items-center clickeable text-center mx-auto w-full px-6"
                        >
                            <ProjectsIcon />
                            <span className="text-center font-semibold">Proyectos</span>
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    );
}
