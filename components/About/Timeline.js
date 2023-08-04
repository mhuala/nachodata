import { DownloadIcon } from "@/public/icons/icons";

const Timeline = () => {
    return (
        <div className="px-12 pb-10 -mt-12 animate-fade-left">
            <div className="bg-slate-800 rounded-r-full top-12 relative w-2/3 items-center mx-0 2xl:mx-auto flex">
                <h2 className="text-white text-2xl sm:text-4xl  font-semibold  relative p-2 w-auto">
                    Experiencia Previa{" "}
                </h2>
            </div>
            <ol className="mx-auto border-l-2 border-blue dark:border-blue-500 my-12 max-w-7xl pt-8">
                {/* <!--First item--> */}
                <li className="">
                    <div className="flex-start flex items-center">
                        <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue dark:bg-blue-500"></div>
                        <h4 className="-mt-2 text-gray-300 text-base lg:text-xl font-semibold">
                            Analista de Datos Estrategia Ciencia, Tecnología,
                            Conocimiento e Innovación región de Los Lagos.
                        </h4>
                    </div>
                    <div className="mb-6 ml-6 pb-6">
                        <span className="text-sm text-blue transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600">
                            Enero-Junio 2023
                        </span>
                        <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
                            Parte del equipo del Centro de Estudios Regionales
                            (CER) de la Universidad Austral de Chile a cargo de
                            la creación de la Estrategia CTCI de la región de
                            Los Lagos, encargado de recolección análisis y
                            reportería de datos.
                        </p>
                    </div>
                </li>

                {/* <!--Second item--> */}
                <li className="">
                    <div className="flex-start flex items-center">
                        <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue dark:bg-blue-500"></div>
                        <h4 className="-mt-2 text-gray-300 text-base lg:text-xl font-semibold">
                            Tesista Corporación Regional de Desarrollo
                            Productivo de Los Ríos
                        </h4>
                    </div>
                    <div className="mb-6 ml-6 pb-6">
                        <span className="text-sm text-blue transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600">
                            Marzo-Julio 2022
                        </span>
                        <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
                            Creación de sistema prototipo de apoyo a la toma de
                            decisiones de inversión pública privada empleando
                            técnicas de análisis y visualización de datos para
                            la Corporación Regional de Desarrollo Productivo de
                            Los Ríos.
                        </p>
                        <a href="/files/tesis.txt" download>
                            <button
                                type="button"
                                className="flex items-center gap-2 rounded bg-blue px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                href="/files/tesis.txt"
                                download
                            >
                                <DownloadIcon />
                                <span>Tesis</span>
                            </button>
                        </a>
                    </div>
                </li>

                {/* <!--Third item--> */}
                <li className="">
                    <div className="flex-start flex items-center">
                        <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue dark:bg-blue-500"></div>
                        <h4 className="-mt-2 text-gray-300 text-base lg:text-xl font-semibold">
                            Práctica profesional en Agencia de Sustentabilidad y
                            Cambio Climático (ASCC)
                        </h4>
                    </div>
                    <div className="mb-6 ml-6 pb-6">
                        <span className="text-sm text-blue transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600">
                            Enero-Febrero 2021
                        </span>
                        <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
                            Parte del equipo de desarrollo de software basado en
                            Python para detección de errores y sistematización
                            de Acuerdos de Producción Limpia.
                        </p>
                        <a href="/files/cv.txt" download>
                            <button
                                type="button"
                                className="flex items-center gap-2 rounded bg-blue px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                <DownloadIcon />

                                <span>Certificación</span>
                            </button>
                        </a>
                    </div>
                </li>
            </ol>
        </div>
    );
};

export default Timeline;
