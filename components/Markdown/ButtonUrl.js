import Link from "next/link";

const ButtonUrl = ({ callToAction, href }) => {
    return (
        <Link href={href}>
            <div className="flex mt-2">
                <div
                    type="button"
                    className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-[#5f7392] hover:shadow-lg flex items-center space-x-2"
                >
                    <span>{callToAction}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    );
};

export default ButtonUrl;
