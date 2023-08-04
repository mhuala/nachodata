"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                            Let&apos;s talk!
                        </h2>
                        <div className="dark:text-gray-400">
                            Vivamus in nisl metus? Phasellus.
                        </div>
                    </div>
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    novalidate=""
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                    <label for="name" className="text-sm">
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        className="w-full p-3 rounded dark:bg-gray-600"
                    />
                    <label for="email" className="text-sm">
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        className="w-full p-3 rounded dark:bg-gray-600"
                    />
                    <label for="message" className="text-sm">
                        Message
                    </label>
                    <textarea
                        name="message"
                        className="w-full p-3 rounded dark:bg-gray-600"
                    />
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900"
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
