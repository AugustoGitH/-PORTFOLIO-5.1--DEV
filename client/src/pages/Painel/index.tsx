import { useEffect } from "react"
import { Layout } from "../../patterns/Layout"
import useFetchProjectsPrivate from "../../queries/services/fetchProjectsPrivate"
import useProjectsStore from "../../stores/project/private/useProjects"
import { PainelPatterns } from "./PainelPatterns"


const Painel = (): JSX.Element => {
  const { data: projects } = useFetchProjectsPrivate()
  const setProjects = useProjectsStore(state => state.setProjects)

  useEffect(() => {
    setProjects(projects ?? null)
  }, [projects])

  return (
    <>
      <Layout.Header mode="painel" />
      <PainelPatterns.Root>
        <PainelPatterns.Dashboard />
        <PainelPatterns.SearchRepos />
        <PainelPatterns.FormCreateProject />
        <PainelPatterns.ManageProjects />
      </PainelPatterns.Root>
    </>
  )
}


export default Painel