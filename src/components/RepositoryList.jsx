import { RepositoryItem } from "./RepositoryItem";

import { useState } from "react";

// https://api.github.com/users/samucatezu/repos
import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/samucatezu/github-explorer",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

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
