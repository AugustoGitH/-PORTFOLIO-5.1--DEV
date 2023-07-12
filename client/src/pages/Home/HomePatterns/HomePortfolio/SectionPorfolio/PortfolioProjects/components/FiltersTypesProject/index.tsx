import { useEffect, useState } from "react"


import * as S from "./styles"
import { type IRegisterFilter } from "./types"
import useProjectsStore from "../../../../../../../../stores/project/public/useProjects"
import { TProjectType } from "../../../../../../../../types/Project"


const FiltersTypeProject = (): JSX.Element => {
  const [typeFilter, setTypeFilter] = useState<TProjectType>("all")
  const filterProjectsOnCanvas = useProjectsStore(state => state.filterProjectsOnCanvas)

  useEffect(() => {
    filterProjectsOnCanvas(typeFilter)
  }, [typeFilter, filterProjectsOnCanvas])

  const registerFilter = (type: TProjectType): IRegisterFilter => ({
    onClick: () => { setTypeFilter(type) },
    className: typeFilter === type ? "mark-button-filter" : ""
  })

  return (
    <S.FiltersTypeProject>
      <li {...registerFilter("all")} >
        All
      </li>
      <li {...registerFilter("lading page")}>
        Lading Pages
      </li>
      <li {...registerFilter("web app")}>
        Web Apps
      </li>
      <li {...registerFilter("e-commerce")}>
        E-Commerces
      </li>
    </S.FiltersTypeProject>
  )
}

export default FiltersTypeProject