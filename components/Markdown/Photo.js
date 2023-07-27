import Image from "next/image";

const Photo = ({ post, image }) => {
    return (
        <div>
            <Image
                src={`../../public/postImages/${post}/${image}.png`}
                alt={image}
                className="h-auto max-w-full"
            />
        </div>
    );
};

export default Photo;
