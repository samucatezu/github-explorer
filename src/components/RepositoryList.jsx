import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/samucatezu/github-explorer",
};

export function RepositoryList() {
  return (
    <section className="repository-lis t">
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem repository={repository}></RepositoryItem>
        <RepositoryItem repository={repository}></RepositoryItem>
        <RepositoryItem repository={repository}></RepositoryItem>
        <RepositoryItem repository={repository}></RepositoryItem>
      </ul>
    </section>
  );
}
