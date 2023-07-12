import { useEffect, useState } from "react"




import { CardInfo } from "./components/CardInfo"
import * as S from "./styles"
import useProjectsStore from "../../../../stores/project/private/useProjects"
import { IDashboardData } from "../../../../stores/project/private/useProjects/types"

import useFetchProjectsPrivate from "../../../../queries/services/fetchProjectsPrivate"





const PainelDashboard = (): JSX.Element => {
  const dataDashboard = useProjectsStore(state => state.dataDashboard)
  const { isFetching } = useFetchProjectsPrivate()

  const [{ completedProjects, devlopmentProjects, ecommerces, ladingPages, likes, views, webApps }, setDashboardDefaultValues] = useState<IDashboardData>({
    completedProjects: 0,
    devlopmentProjects: 0,
    ecommerces: 0,
    ladingPages: 0,
    likes: {
      all: 0,
      currentDay: 0
    },
    views: {
      all: 0,
      currentDay: 0
    },
    webApps: 0
  })


  useEffect(() => {
    if (dataDashboard) {
      setDashboardDefaultValues(dataDashboard)
    }
  }, [dataDashboard])

  return (
    <S.PainelDashboard>
      <h2>Dashboard</h2>
      <ul className="dash-projects">
        <CardInfo.Compound
          title="Curtidas"
          loading={isFetching}
          quantity={likes.all}
          subTitle="em seus projetos"
          icon={<i className='bx bxs-like'></i>}
          {...(likes.currentDay && {
            plus: `+${likes.currentDay} curtidas hoje!`
          })}
          order={1}
        />
        <CardInfo.Compound
          title="Visualizações"
          loading={isFetching}
          quantity={views.all}
          subTitle="em seus projetos"
          {...(views.currentDay && {
            plus: `+${views.currentDay} visualizações hoje!`
          })}
          icon={<i className='bx bxs-mouse-alt'></i>}
          order={2}
        />
        <CardInfo.Compound
          quantity={completedProjects}
          loading={isFetching}
          title={`projeto${completedProjects === 1 ? "" : "s"}`}
          subTitle="concluidos e ativos"
          icon={<i className='bx bxs-box' ></i>}
          order={3}
        />
        <CardInfo.Compound
          quantity={devlopmentProjects}
          loading={isFetching}
          title={`projeto${devlopmentProjects === 1 ? "" : "s"}`}
          subTitle="em desenvolvimento"
          icon={<i className='bx bxs-cog' ></i>}
          order={4}
        />
      </ul>
      <ul className="dash-types">
        <CardInfo.Simple
          loading={isFetching}
          quantity={ladingPages}
          title="Lading Pages"
          order={5}
        />
        <CardInfo.Simple
          quantity={webApps}
          loading={isFetching}
          title="Web Apps"
          order={6}
        />
        <CardInfo.Simple
          quantity={ecommerces}
          title="E-Commerces"
          loading={isFetching}
          order={7}
        />
      </ul>
    </S.PainelDashboard>
  )
}

export default PainelDashboard