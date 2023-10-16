

import useSearchReposStore from "../../../../../../stores/project/private/useSearchRepos"
import * as S from "./styles"

const InputSearch = (): JSX.Element => {
  const { searchRepos } = useSearchReposStore()

  const handleSearch = (value: string): void => {
    searchRepos(value)
  }

  return (
    <S.InputSearch>
      <label>Digite o nome do repositório:</label>
      <input onChange={e => { handleSearch(e.target.value); }} />
    </S.InputSearch>
  )
}


export default InputSearch