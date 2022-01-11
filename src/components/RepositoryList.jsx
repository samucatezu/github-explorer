const repositoryName= 'unform2';

export function RepositoryList(){
  return(
    <section className="repository-lis t">
      <h1>Lista de repositorios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositorios
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositorios
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositorios
          </a>
        </li>
      </ul>
    </section>
  )
}