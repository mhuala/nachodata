import RepoCard from "react-repo-card";

const Repository = ({repoName}) => {
    return (
    <div className="max-w-7xl"> 
      <RepoCard username="mhuala" repository={repoName} />
    </div>
    );
}

export default Repository;