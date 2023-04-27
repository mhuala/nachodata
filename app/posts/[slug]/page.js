
import { postsPath } from "../../../utils/mdxUtils"
import fs from "fs";
import path from "path"
import matter from "gray-matter"
import dynamic from "next/dynamic"

const PostContent = dynamic(
    () => import('../../../components/PostContent'),
  { ssr: false }
)

// getStaticProps en NextJS 13
const getPostContent =  async (slug) => {
    const filePath = `${path.join(postsPath,slug)}.mdx`
    const fileContent =  fs.readFileSync(filePath,"utf8")
    const markdownContent  = matter(fileContent).content
    const metadata = matter(fileContent).data
    return {markdownContent,metadata}
}

const PostPage = async (props) => {
    const postContent = await getPostContent(props.params.slug)
    return (        <div className="px-4">
          
            <PostContent>
            {postContent.markdownContent}
            </PostContent>
        </div>
    );
}

export default PostPage;
