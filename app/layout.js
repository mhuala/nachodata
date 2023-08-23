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
            </Head>
            <body className="bg-gray-900  flex-col min-h-screen justify-between">
                <Navbar />
                <div className="mb-auto">{children}</div>

                <Footer />
            </body>
        </html>
    );
}
