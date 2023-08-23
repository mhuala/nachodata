import getPostMetadata from "@/utils/utils";
import { postsPath } from "../../../utils/mdxUtils";
import { TagsIcon, TimeIcon } from "@/public/icons/icons";
import Note from "@/components/Markdown/Note";

import dynamic from "next/dynamic";
import Image from "next/image";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import RecommendedPost from "@/components/Posts/RecommendedPost";

/// FALTA AÑADIR EL :D

const PostContent = dynamic(
    () => import("../../../components/Posts/PostContent"),
    { ssr: false }
);

// getStaticProps en NextJS 13
const getPostContent = async (slug) => {
    const filePath = `${path.join(postsPath, slug)}.mdx`;
    const fileContent = fs.readFileSync(filePath, "utf8");
    const markdownContent = matter(fileContent).content;
    const metadata = matter(fileContent).data;
    return { markdownContent, metadata };
};

const getRandomElement = async (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getOtherPosts = async (postsList, actualPost) => {
    let firstPost = await getRandomElement(
        postsList.filter((post) => post.id !== actualPost.id)
    );
    let secondPost = await getRandomElement(
        postsList.filter((post) => post.id !== firstPost.id)
    );
    return { firstPost, secondPost };
};

const PostPage = async (props) => {
    const postContent = await getPostContent(props.params.slug);
    const posts = await getPostMetadata();
    const recommendedPosts = await getOtherPosts(posts, postContent.metadata);

    return (
        <div className="flex flex-col">
            <div className="mx-auto w-full md:w-8/12 xl:w-7/12 2xl:w-6/12 mt-12 mb-12 bg-[#1F2937] rounded-t-2xl space-y-6">
                {/* POST INFO */}
                <div
                    className="w-full h-48 bg-cover bg-center rounded-t-2xl grayscale"
                    style={{
                        backgroundImage: `url(${postContent.metadata.bannerURL})`,
                    }}
                >
                    <div className="w-4/5 h-full flex mx-auto justify-center items-center backdrop-blur-sm rounded-t-2xl">
                        <h1 className="text-fuchsia-50 text-4xl skew-x-12 bg-gray-800 italic text-center md:text-left">
                            <span className="text-purple-500 text-4xl font-mono">
                                &quot;
                            </span>
                            {postContent.metadata.title}
                            <span className="text-purple-500 text-4xl font-mono">
                                &quot;
                            </span>
                        </h1>
                    </div>
                </div>
                <section className="text-white flex flex-row items-center justify-center mx-auto space-x-4 w-full py-2 px-10">
                    <Image
                        alt="avatar"
                        src="https://images.generated.photos/8OAGobSgGzf4uK93LKdKefvnnrv4ODAV0CaWrSILXEI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDczODU0LmpwZw.jpg"
                        width="0"
                        height="0"
                        className=" rounded-full h-10 w-10"
                    />
                    <span className="font-mono w-full flex gap-2">
                        By{" "}
                        <h6 className="underline">
                            {postContent.metadata.author}
                        </h6>
                        · {postContent.metadata.date}
                    </span>
                </section>
                <h1 className="text-gray-200 font-light text-lg px-10">
                    {postContent.metadata.description}
                </h1>
                <span className="flex flex-row gap-4 px-10 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gray"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gray"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 6h.008v.008H6V6z"
                        />
                    </svg>
                    <span className="text-gray-500 font-semibold">Tags :</span>
                    {postContent.metadata.tags.map((tag) => {
                        return (
                            <h1
                                className="text-gray-400 font-thin italic"
                                key={tag}
                            >
                                {tag}
                            </h1>
                        );
                    })}
                </span>
                <hr className="border-2 border-violet-400 drop-shadow-xl rounded-full mt-2" />
                {/* POST CONTENT */}
                <div className="text-white mt-12 pb-8 mb-12 px-10">
                    <Note/>
                    <PostContent>{postContent.markdownContent}</PostContent>
                </div>
                {/* RECOMMENDED POSTS */}
            </div>
           {/* <div className="flex flex-col lg:flex-row gap-8 mx-auto w-11/12 md:w-10/12 lg:w-9/12 mt-10 mb-10">
                 <RecommendedPost
                    title={recommendedPosts.firstPost.title}
                    description={recommendedPosts.firstPost.description}
                    date={recommendedPosts.firstPost.date}
                    slug={recommendedPosts.firstPost.slug}
                    tags={recommendedPosts.firstPost.tags}
                    bannerURL={recommendedPosts.firstPost.bannerURL}
                    author={recommendedPosts.firstPost.author}
                />
                <RecommendedPost
                    title={recommendedPosts.secondPost.title}
                    description={recommendedPosts.secondPost.description}
                    date={recommendedPosts.secondPost.date}
                    slug={recommendedPosts.secondPost.slug}
                    tags={recommendedPosts.secondPost.tags}
                    bannerURL={recommendedPosts.secondPost.bannerURL}
                    author={recommendedPosts.secondPost.author}
                /> 
            </div>*/}
        </div>
    );
};

export default PostPage;
