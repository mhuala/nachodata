import { GithubCard } from "github-user-repo-card";

const Repository = ({repoName}) => {
    return (
    <div className="max-w-7xl text-white"> 
      <GithubCard name="mhuala" type="repo" repository={repoName} width={500} height={150}/>
    </div>
    );
}

export default Repository;