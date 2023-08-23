import Image from "next/image";

const Photo = ({ postId, fileName }) => {
    return (
        <div className="flex items-center w-full mt-8  ">
            <Image
                src={`/postImages/${postId}/${fileName}.png`}
                alt={fileName}
                className="h-auto w-auto mx-auto bg-slate-300 rounded-md p-2"
                width={0}
                height={0}
            />
        </div>
    );
};

export default Photo;
