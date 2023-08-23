import RepoCard from "react-repo-card";

const Repository = ({repoUrl,imageUrl,repoName,desc}) => {
    return (
      <div id="repocard" className="w-48 mt-8">
      <RepoCard username="mhuala" repository={repoName}/>
    </div>
    );
}

export default Repository;