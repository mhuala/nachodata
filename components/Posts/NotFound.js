import Image from "next/image";

const NotFound = () => {
    return (
        <div className="grid col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-4">
            <div className="flex flex-col mx-auto items-center w-auto lg:flex-row lg:min-h-[60vh] space-y-8">
                <Image
                    src="/webImages/notfound.png"
                    width={0}
                    height={0}
                    className="w-auto h-64 md:h-5/6"
                />
                <h3 className="text-white text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl w-full">
                    No encontramos nada que coincida :({" "}
                </h3>
            </div>
        </div>
    );
};

export default NotFound;
