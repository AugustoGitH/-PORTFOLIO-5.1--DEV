import { useEffect } from "react"



import InputSearch from "./components/InputSearch"
import ListRepos from "./components/ListRepos"
import * as S from "./styles"
import useFetchRepos from "../../../../queries/services/repos"
import useSearchReposStore from "../../../../stores/project/private/useSearchRepos"

const PainelSearchRepos = (): JSX.Element => {
  const { data: repos } = useFetchRepos()
  const setRepos = useSearchReposStore(state => state.setRepos)
  useEffect(() => {
    if (repos) {
      setRepos(repos)
    }
  }, [repos, setRepos])
  return (
    <S.PainelSearchRepos>
      <h4>AugustoGith</h4>
      <h2>Buscar reporitórios no seu Github</h2>
      <InputSearch />
      <ListRepos />
    </S.PainelSearchRepos>
  )
}

export default PainelSearchRepos