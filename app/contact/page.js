"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="min-h-screen flex mx-auto items-center justify-center w-full animate-fade-left">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col h-full">
                    <div className="space-y-2 h-full">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                            Hablemos !
                        </h2>
                        <div className="flex dark:text-gray-400 mx-auto items-center h-full pb-12 px-10">
                            <Image className="w-full" src="https://cdni.iconscout.com/illustration/premium/thumb/contact-no-4550330-3779138.png?f=webp" width={0} height={0}/>
                        </div>
                    </div>
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    novalidate=""
                    className="flex flex-col gap-12 ng-untouched ng-pristine ng-valid"
                >
                   <div className="relative">
                    <label for="name" className="bg-violet-900 rounded-r-lg py-0.5 px-2 absolute -top-5 left-0">
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        className="w-full p-3 rounded dark:bg-gray-600"
                    />
                    
                    </div>
                    <div className="relative">
                    <label for="email" className="bg-violet-900 rounded-r-lg py-0.5 px-2 absolute -top-5 left-0">
                        Email
                        </label>
                    <input
                        type="email"
                        name="user_email"
                        className="w-full p-3 rounded dark:bg-gray-600"
                    />
                    </div>
                    <div className="relative">
                    <label for="message"  className="bg-violet-900 rounded-r-lg py-0.5 px-2 absolute -top-5 left-0">
                        Message
                        </label>
                    <textarea
                        name="message"
                        className="w-full h-48 p-3 rounded dark:bg-gray-600"
                    />
                    
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-500 dark:text-gray-200"
                        onClick={sendEmail}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
