import { useEffect, useRef, useState } from "react"



import * as S from "./styles"
import { type IInputSelectIdRepoProps } from "./types"
import useSearchReposStore from "../../../../../../stores/project/private/useSearchRepos"
import { IRepository } from "../../../../../../types/repository"
import { Input } from "../../../../../../components/Input"

const InputSelectIdRepo = ({ onChange, reset = false, error = false, helperText, disabled = false }: IInputSelectIdRepoProps): JSX.Element => {
  const repositories = useSearchReposStore(state => state.repos)
  const [reposFocus, setReposFocus] = useState<IRepository[]>([])
  const [showOptions, setShowOptions] = useState(false)
  const [idSelected, setIdSelected] = useState<number | null>(null)
  const [nameRepo, setNameRepo] = useState("")

  const refSelected = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (repositories) {
      setReposFocus(repositories)
    }
  }, [repositories])

  useEffect(() => {
    const handleEventBlurSelected = (ev: MouseEvent): void => {
      if (refSelected.current && !refSelected.current.contains(ev.target as Node)) {
        setShowOptions(false)
      }
    }

    if (showOptions) {
      document.addEventListener("click", handleEventBlurSelected)
    }

    return () => { document.removeEventListener("click", handleEventBlurSelected); }
  }, [showOptions])


  useEffect(() => {
    if (reset) {
      setNameRepo("")
      setIdSelected(null)
      setReposFocus(repositories ?? [])
    }
  }, [reset])

  useEffect(() => {
    if (onChange) {
      onChange(idSelected)
    }
  }, [idSelected])

  const handleClickRepo = (idRepo: number, nameRepo: string): void => {
    setIdSelected(idRepo)
    setNameRepo(nameRepo)
    setShowOptions(false)
  }

  const handleChangeInputSearh = (valueSearch: string): void => {
    if (!repositories) return
    if (reposFocus.length === 0 || !valueSearch) {
      setIdSelected(null)
    }
    setNameRepo(valueSearch)
    const valueSearchTrated = valueSearch.toLowerCase()
    setReposFocus(repositories.filter(repo => {
      const repoNameTrated = repo.name.replace(/-/g, " ").toLowerCase()
      return repoNameTrated.includes(valueSearchTrated) ?? repo.name.includes(valueSearchTrated)
    }))
  }



  return (
    <S.InputSelectIdRepo disabled={disabled} ref={refSelected}>
      <Input.Default
        label="Digite o nome do repositório"
        onFocus={() => { setShowOptions(true); }}
        onClick={() => { setShowOptions(true); }}
        value={nameRepo}
        error={error}
        helperText={helperText}
        onChange={(e) => { handleChangeInputSearh(e.target.value) }}
      />
      {idSelected && (<span className="id-repo">{idSelected}</span>)}
      {
        showOptions && (
          <div className="select-repositories-modal" onBlur={() => { setShowOptions(false); }}>
            <ul className="results-search-repositories">
              {
                reposFocus?.map(repo => (
                  <li key={repo.id} className="repository-result" onClick={() => { handleClickRepo(repo.id, repo.name); }}>
                    <span>{repo.name}</span>
                    <span>{repo.id}</span>
                  </li>
                ))
              }
              {
                reposFocus.length === 0 && (
                  <li className="not-found-repositories">Nenhum repositorio foi encontrado!</li>
                )
              }
            </ul>
          </div>
        )
      }
    </S.InputSelectIdRepo>
  )
}

export default InputSelectIdRepo