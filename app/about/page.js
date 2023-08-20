import Timeline from "@/components/About/Timeline";
import Skills from "@/components/About/Skills";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Profile from "../../public/webImages/about.jpg"
import { DownloadIcon } from "@/public/icons/icons";

const benefits = [
    "Responsabilidad",
    "Autonomía del aprendizaje",
    "Capcidad de trabajo en equipo",
    "Resiliencia",
    "Planificación",
    "Flexibilidad",
];

export default function About() {
    return (
        <div className="bg-gray-900">
            <main className="relative isolate animate-fade-left">
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

                <div className="relative isolate -z-10 ">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 lg:mt-36 mt-24">
                        <div className="mx-auto flex max-w-2xl flex-col gap-10 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                            <Image
                                width={0}
                                height={0}
                                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                                src={Profile}
                                alt=""
                            />
                            <div className="w-full flex-auto">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Acerca de mi
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Ingeniero Civil Industrial con interés por
                                    ganar experiencia y apoyar proyectos
                                    relacionados al análisis de datos poniendo
                                    en práctica las habilidades y conocimientos
                                    adquiridos.
                                </p>
                                <ul
                                    role="list"
                                    className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                                >
                                    {benefits.map((benefit) => (
                                        <li
                                            key={benefit}
                                            className="flex gap-x-3"
                                        >
                                            <CheckCircleIcon
                                                className="h-7 w-5 flex-none"
                                                aria-hidden="true"
                                            />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 flex">
                                    <a
                                        className=" flex items-center gap-2 rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        href="/files/cv.pdf"
                                        download
                                    >
                                        Descarga mi CV 
                                        <DownloadIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Skills />
            <Timeline />
        </div>
    );
}
