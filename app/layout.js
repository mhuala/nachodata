import "./globals.css";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/head";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Nachodata - Todo en datos",
    description: "Analista de datos",
};

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta charset="UTF-8" />
            </Head>
            <Script
                src="https://unpkg.com/pattern.css"
                rel="stylesheet"
                strategy="beforeInteractive"
            />
            <body className="bg-gray-900  flex-col min-h-screen justify-between">
                <Navbar />
                <div className="mb-auto">{children}</div>

                <Footer />
            </body>
        </html>
    );
}
