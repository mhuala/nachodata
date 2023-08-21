import Image from "next/image";
import Link from "next/link";
import { ChatIcon } from "@/public/icons/icons";
import DataAnalystBadge from "../public/webImages/dataAnalyst.svg"

export default function HomePage() {
    return (
        //  REVISAR TAMAÑOS  DE FUENTE SEGUN PANTALLA
        // 1. https://matthewjamestaylor.com/responsive-font-size#:~:text=The%20consensus%20is%20mobile%20font,large%20devices%20is%2018px%20-%2020px.

        <div className=" flex w-full flex-col min-h-screen justify-center">
            {/* HERO */}
            <main className="relative isolate b-slate-800">
                {/* Background */}
                <div
                    className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25 animate-rotate-x animate-infinite animate-duration-[10000ms] animate-ease-linear"
                        style={{
                            clipPath:
                                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                        }}
                    />
                </div>

                {/* Header section */}
                <div className="px-6 lg:px-8">
                    <main className=" px-2">
                        <div className="relative bg-transparent">
                            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                                {/* LG CONTENT */}
                                <div className="hidden lg:grid px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                                    <div className="mx-auto lg:mx-0">
                                        <div className="flex items-center gap-4 relative">
                                        <Image src={DataAnalystBadge} width={0} height={0} className="w-32 h-32 absolute top-0 -left-40 hidden 2xl:flex "/>
                                        <h1 className="text-4xl font-bold tracking-tight text-gray-200  sm:text-6xl">
                                            Soy Nacho Huala,{" "}
                                            <span className="text-violet-500">
                                                {" "}
                                                analista de datos
                                            </span>
                                        </h1>
                                        </div>
                                        <p className="mt-6 text-lg leading-8 text-gray-100 font-semibold">
                                            Quiero ayudarte a tomar decisiones,{" "}
                                            <span className="bg-white px-0.5 skew-x-12  shadow-md text-violet-500 font-extrabold">
                                                decisiones basadas en datos
                                            </span>
                                        </p>
                                        <div className="mt-10 flex items-center gap-x-6">
                                           
                                            <Link
                                                href="/contact"
                                                className="flex gap-2 items-center rounded-md bg-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                <ChatIcon/>
                                                Hablemos !
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* SM IMAGE */}
                                <div className="flex lg:hidden h-full items-center mx-auto justify-center m-10">
                                    <Image
                                        width="0"
                                        height="0"
                                        className="w-[300px] sm:w-96"
                                        src="/webImages/avatar.png"
                                        alt="avatar"
                                    />
                                </div>
                                {/* SM CONTENT */}
                                <div className="grid lg:hidden px-6 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                                    <div className="mx-auto max-w-2xl lg:mx-0">
                                        <div className="flex items-center gap-4">

                                            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl ">
                                                Soy Nacho Huala,{" "}
                                                <span className="text-violet-500">
                                                    {" "}
                                                    analista de datos
                                                </span>
                                            </h1>
                                        </div>
                                        <p className="mt-6 text-lg leading-8 text-gray-100">
                                            Quiero ayudarte a tomar decisiones,{" "}
                                            <span className="bg-white px-0.5 skew-x-12 shadow-md text-violet-500 font-extrabold">
                                                decisiones basadas en datos 
                                            </span>
                                        </p>
                                        <div className="mt-10 flex items-center justify-between">
                                            <Link
                                                href="/contact"
                                                className="flex items-center gap-2 rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                <ChatIcon/>
                                                Hablemos
                                            </Link>
                                        <Image src={DataAnalystBadge} width={0} height={0} className="w-32 h-32"/>
                                        </div>
                                    </div>
                                </div>
                                {/* LG IMAGE */}
                                <div className="hidden lg:grid lg:col-span-5 h-full items-center mx-auto justify-center">
                                    <Image
                                        width="0"
                                        height="0"
                                        className="w-96 md:w-[400px] lg:w-[550px] xl:w-[650px] 2xl:w-[730px]"
                                        src="/webImages/avatar.png"
                                        alt="avatar"
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </main>
        </div>
    );
}
