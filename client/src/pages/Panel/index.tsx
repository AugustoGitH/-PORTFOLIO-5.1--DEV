import { useEffect } from "react"
import { Layout } from "../../patterns/Layout"
import useFetchProjectsPrivate from "../../queries/services/fetchProjectsPrivate"
import useProjectsStore from "../../stores/project/private/useProjects"
import { PanelPatterns } from "./PanelPatterns"


const Painel = (): JSX.Element => {
  const { data: projects } = useFetchProjectsPrivate()
  const setProjects = useProjectsStore(state => state.setProjects)

  useEffect(() => {
    setProjects(projects ?? null)
  }, [projects])

  return (
    <>
      <Layout.Header mode="painel" />
      <PanelPatterns.Root>
        <PanelPatterns.Dashboard />
        <PanelPatterns.SearchRepos />
        <PanelPatterns.FormCreateProject />
        <PanelPatterns.ManageProjects />
      </PanelPatterns.Root>
    </>
  )
}


export default Painel