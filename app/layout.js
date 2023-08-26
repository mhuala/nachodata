import "./globals.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local"
import Head from "next/head";
import Footer from "@/components/Footer";


export const metadata = {
    title: "Nachodata - Analista de datos",
    description: "Analista de datos",
};

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

const lulo = localFont({
    src:[
    {
        path: "../public/fonts/Lulo Clean One Bold.otf",
        weight: "400",
        style: "normal"
    }
],
    variable: "--font-lulo"
})


export default async function RootLayout({ children }) {
    return (
        <html lang="en" className={`${lulo.variable}`}>
            <Head>
                <meta charset="UTF-8" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.css"
                    integrity="sha384-xNwWFq3SIvM4dq/1RUyWumk8nj/0KFg4TOnNcfzUU4X2gNn3WoRML69gO7waf3xh"
                    crossorigin="anonymous"
                    />
            </Head>
            <body className="bg-gray-900  flex-col min-h-screen justify-between">
                <Navbar />
                <div className="mb-auto">{children}</div>

                <Footer />
            </body>
        </html>
    );
}
