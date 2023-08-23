import Link from "next/link"
import Image from "next/image"

const Repository = ({repoUrl,imageUrl,repoName,desc}) => {
    return (
      <Link href={repoUrl} class="w-72 bg-slate-900 border rounded-lg border-gray-700 p-5 shadow hover:bg-gray-700 delay-100 duration-200">
        <div class="flex flex-row">
                <Image src={imageUrl} class="rounded" />
                <p class="ml-3">
                  <span class="text-gray-500 font-semibold">mhuala/</span>
                  <span class="text-gray-300 font-semibold">{repoName}</span>
                </p>
        </div>
        <p class="text-xs text-gray-500 mt-3">
          {desc}
        </p>
    </Link>
    );
}

export default Repository;