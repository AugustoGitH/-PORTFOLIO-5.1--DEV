import { useEffect, useRef } from "react"
import { Layout } from "../../patterns/Layout"
import { HomePatterns } from "./HomePatterns"
import useFetchProjectsPublic from "../../queries/services/fetchProjectsPublic"
import useProjectsStore from "../../stores/project/public/useProjects"
import ButtonNavigationAidHome from "../../components/ButtonNavigationAidHome"
// import { Alert } from "../../components/Alert"


const Home = (): JSX.Element => {
  const { data: projects } = useFetchProjectsPublic()
  const setProjects = useProjectsStore(state => state.setProjects)

  useEffect(() => {
    setProjects(projects ?? null)
  }, [projects])

  const ref = {
    about: useRef<HTMLDivElement | null>(null),
    portfolio: useRef<HTMLDivElement | null>(null)
  }

  return (
    <>
      <Layout.Header />
      <HomePatterns.Root>
        <HomePatterns.About ref={ref.about} id="about-section" />
        <HomePatterns.Portfolio ref={ref.portfolio} id="portfolio-section" />
      </HomePatterns.Root>
      <ButtonNavigationAidHome
        refs={{
          about: ref.about,
          portfolio: ref.portfolio
        }}
      />
      {/* <Alert.Cookies /> */}
    </>
  )
}


export default Home