import { useState } from "react"


import moment from "moment"

import * as S from "./styles"
import { IRepository } from "../../../../../../types/repository"
import useSearchReposStore from "../../../../../../stores/project/private/useSearchRepos"
import { Loader } from "../../../../../../components/Loader"


interface IRepositoryProps {
  repo: IRepository
}

const Repository = ({ repo }: IRepositoryProps): JSX.Element => {
  const createdDate = moment(new Date(repo.created_at)).format("DD/MM/YYYY")
  const updatedDate = moment(new Date(repo.updated_at)).format("DD/MM/YYYY")


  const [isCopy, setIsCopy] = useState(false)
  const handleClickCopy = (id: number): void => {
    if (!isCopy) {
      navigator.clipboard.writeText(id.toString())
        .then(() => { setIsCopy(true); }).catch(() => {
          setIsCopy(false)
        })
    }
  }

  return (
    <S.Repository>
      <p><span>Nome: </span>{repo.name} </p>
      <p>
        <span>id: </span>{repo.id}
        <button
          className={`button-copy-id ${isCopy ? "copy" : ""}`}
          onClick={() => { handleClickCopy(repo.id); }}
          onMouseLeave={() => { setIsCopy(false); }}
        >
          <i className='bx bxs-copy-alt' ></i>
        </button>
      </p>
      <p><span>Ultima atualização: </span>{updatedDate}</p>
      <p><span>Data de criação: </span>{createdDate}</p>
    </S.Repository>
  )
}

const ListRepos = (): JSX.Element => {
  const [canvasRepos, repos] = useSearchReposStore(state => [state.canvasRepos, state.repos])
  return (
    <S.ListRepos>
      {
        repos === undefined && (
          <S.Loader>
            <Loader.Default color="light" />
          </S.Loader>
        )
      }
      {
        repos && canvasRepos.length === 0 ? (
          <S.NotFoundRepos>
            <p>Nunhum repositório foi encontrado!</p>
          </S.NotFoundRepos>
        ) : <></>
      }
      {
        repos && canvasRepos ? canvasRepos.map(repo => (
          <Repository repo={repo} key={repo.id} />
        )) : <></>
      }

    </S.ListRepos>
  )
}

export default ListRepos