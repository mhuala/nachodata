"use client";
import Link from "next/link";
import TypingAnimator from "react-typing-animator";

const Info = () => {
    const textArray = [
        "Nacho Huala",
        "Data Analyst",
        "Freelancer",
        "Programador",
    ];
    return (
        <div className="flex flex-col gap-12 h-full mx-auto items-center justify-center">
            <div className=" text-white font-bebas font-bold rounded-2xl text-start">
                <div className="mt-8 md:mt-0 w-[300px] sm:w-[600px] md:w-[900px] flex flex-col md:flex-row mx-auto items-center justify-center lg:justify-start gap-2">
                    <h2 className="text-start text-5xl md:ml-8 xl:ml-12 2xl:ml-16 md:text-6xl 2xl:text-8xl">
                        Soy
                    </h2>
                    <div className="flex md:hidden font-semibold italic h-[66px]">
                        <TypingAnimator
                            textArray={textArray}
                            cursorColor="#333"
                            textColor="#CE3F73"
                            fontSize="48px"
                            typingSpeed={60}
                            delaySpeed={1000}
                            backspace
                        />
                    </div>
                    <div className="hidden font-gothic md:flex 2xl:hidden h-[86px]">
                        <TypingAnimator
                            textArray={textArray}
                            cursorColor="#333"
                            textColor="#CE3F73"
                            fontSize="60px"
                            typingSpeed={60}
                            delaySpeed={1000}
                            backspace
                        />
                    </div>
                    <div className="hidden font-gothic 2xl:flex h-[135px]">
                        <TypingAnimator
                            textArray={textArray}
                            cursorColor="#333"
                            textColor="#CE3F73"
                            fontSize="96px"
                            typingSpeed={60}
                            delaySpeed={1000}
                            backspace
                        />
                    </div>
                </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                Quiero ayudarte a tomar decisiones
                <b>
                    <u>impulsadas por datos</u>
                </b>
                . Chile📍
            </p>
            {/* GLOWING BUTTON*/}
            <div className="flex flex-col mt-12 mb-12 lg:mt-32 items-center  w-full ">
                <div className="max-w-7xl h-16 ">
                    <div className="relative group">
                        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative px-7 py-6 bg-gray-300 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                <span className="relative text-black group-hover:text-white">
                                    Hover me!
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
