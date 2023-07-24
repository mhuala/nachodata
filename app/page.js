import Skills from "@/components/Home/Skills";
import Info from "@/components/Home/Info";

import avatar from "../public/webImages/avatar.png";
import getPostMetadata from "@/utils/utils";

import Image from "next/image";

// CARD COMPETENCES
//https://tailwindcomponents.com/component/skills-card

export default function HomePage() {
    const posts = getPostMetadata();
    return (
        //  REVISAR TAMAÑOS  DE FUENTE SEGUN PANTALLA
        // 1. https://matthewjamestaylor.com/responsive-font-size#:~:text=The%20consensus%20is%20mobile%20font,large%20devices%20is%2018px%20-%2020px.

        <div className=" flex w-full flex-col min-h-screen justify-center">
            {/* HERO */}
            <main className="mt-16 lg:mt-24 px-2">
                {/* CONTAINER */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 xl:items-center justify-center">
                    {/* SM  IMAGE */}
                    <div className="flex lg:hidden lg:col-span-1 h-3/4 items-center mt-6 mx-auto">
                        <Image
                            width="0"
                            height="0"
                            className="w-[250px] sm:w-96"
                            src={avatar}
                            alt="avatar"
                        />
                    </div>
                    {/* INFO */}
                    <Info />
                    {/* LG IMAGE */}
                    <div className="hidden lg:grid col-span-1 mx-auto">
                        <Image
                            width="0"
                            height="0"
                            className="w-96 md:w-[400px] lg:w-[550px] xl:w-[650px] 2xl:w-[730px]"
                            src={avatar}
                            alt="avatar"
                        />
                    </div>
                </div>
                {/* COMPETENCIAS */}
                <Skills />
            </main>
        </div>
    );
}
