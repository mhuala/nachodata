import Link from "next/link";

const Url = ({children,href}) => {
    return (
        <Link href={href} className="text-[#37bcdd] italic">
            {children}
        </Link>
    );
}

export default Url;