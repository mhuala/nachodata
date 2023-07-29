import Image from "next/image";

const NotFound = () => {
    return (
        <div className="grid col-span-2 lg:col-span-2 xl:col-span-3 2xl:col-span-4">
            <div className="flex flex-col mx-auto items-center w-auto lg:flex-row lg:min-h-[60vh] space-y-8">
                <Image
                    alt="Not Found"
                    src="/webImages/notfound.png"
                    width={0}
                    height={0}
                    className="w-auto h-64 md:h-5/6 grayscale"
                />
                <div className="flex flex-col items-center mx-auto">
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-extrabold">
                        UPS !
                    </h2>
                    <h3 className="text-white text-2xl text-center lg:text-3xl xl:text-4xl 2xl:text-6xl w-full font-gothic italic font-semibold">
                        No encontramos nada que coincida :({" "}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
