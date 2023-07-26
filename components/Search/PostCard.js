import { TimeIcon, PasteIcon } from "../../public/icons/icons";
import Link from "next/link";
import Image from "next/image";

const IMAGES_DICTIONARY = {
    python: "/webImages/python.png",
    react: "/webImages/react.png",
    fastapi: "/webImages/fastapi.png",
    mongodb: "/webImages/mongodb.png",
    chatgpt: "/webImages/python.png",
    pinecone: "/webImages/pinecone.png",
    pandas: "/webImages/pandas.png",
    scikit: "/webImages/scikit.png",
    numpy: "/webImages/numpy.png",
    powerbi: "/webImages/powerbi.png",
    seaborn: "/webImages/seaborn.png",
};

// TODO
// 1. Agregar sección de busqueda estilo https://tailwindcomponents.com/component/box-search-1
// 2. Agregar seccion de No resultados
// 3. Agregar filtros por tag
// 4. Revisar estilos

const PostCard = ({
    title,
    date,
    slug,
    tags,
    description,
    author,
    bannerURL,
}) => {
    return (
        <div className="flex flex-col text-white border-gray-300 border rounded-xl text-center px-4 py-4 justify-between h-full bg-pagegray space-y-2">
            {/* <!-- IMAGE -->  */}
            <div className="relative overflow-hidden cursor-pointer rounded-xl ">
                <Image
                    src={bannerURL}
                    alt={title}
                    width="0"
                    height="0"
                    className="rounded-xl object-cover hover:scale-110 opacity-50 hover:opacity-75 transition duration-300 ease-in-out w-full"
                />
                <div className="absolute top-5 left-5">
                    <div className="flex justify-end gap-2 bg-white rounded-full px-2 py-2 shadow-2xl">
                        {tags.map((tag) => {
                            return (
                                <div key={tag} className="">
                                    <Image
                                        src={IMAGES_DICTIONARY[tag]}
                                        alt={tag}
                                        width="0"
                                        height="0"
                                        className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 rounded-full grayscale"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* <!-- TECHNOLOGIES-->  */}

            {/* <!-- TITLE -->  */}
            <Link
                href={`/posts/${slug}`}
                passHref
                className="text-left sm:text-xl lg:text-2xl text-indigo-400 font-rale"
            >
                {title}
            </Link>
            {/* <!-- CONTENT -->  */}
            <p className="line-clamp-3 text-sm sm:text-base lg:text-lg text-gray-300 text-left overflow-ellipsis h-16">
                {description}
            </p>

            {/* <!-- FINAL SECTION -->  */}
            <section className="flex flex-row items-center justify-center mx-auto space-x-4 w-full py-2">
                <span className="font-mono w-full flex flex-col sm:flex-row text-xs sm:text-sm md:text-base gap-2">
                    <div className="flex gap-2">
                        <Image
                            src="https://images.generated.photos/8OAGobSgGzf4uK93LKdKefvnnrv4ODAV0CaWrSILXEI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDczODU0LmpwZw.jpg"
                            width="0"
                            height="0"
                            className=" rounded-full h-6 w-6 sm:h-10 sm:w-10"
                        />
                        By <h6 className="underline">{author}</h6>· {date} ·
                    </div>
                    <div className="flex gap-2">
                        <TimeIcon /> 2 min read
                    </div>
                </span>
            </section>
        </div>
    );
};

export default PostCard;
