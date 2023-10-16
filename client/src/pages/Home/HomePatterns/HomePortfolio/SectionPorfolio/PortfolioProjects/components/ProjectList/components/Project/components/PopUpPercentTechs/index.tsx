
import * as S from "./styles"
import { type IPopUpPercentTechsProps, type IBarTechnologieProps } from "./types"
import treatingTechsToShowPercentage from "@/utils/treatingTechsToShowPercentage"
import techsWhiteListIcon from "@/settings/techsWhiteListIcon"
import Translate from "@/components/Translate"
import TitleItem from "@/components/TitleItem"


const BarTechnologie = ({ tech, percent, order, idProject, listIcons }: IBarTechnologieProps): JSX.Element => {
  return (
    <TitleItem title={tech.toUpperCase()}>
      <S.BarTechnologie order={order} percent={percent} id={idProject} tech={tech}>
        <div className="icon-tech">
          {listIcons.find((techList) => techList.tech === tech)?.icon}
        </div>
        <div className="bar-percent-container">
          <div className="bar-percent-content">
            <span className="percent-tech">{`${percent}%`}</span>
          </div>
        </div>
      </S.BarTechnologie>
    </TitleItem>
  )
}


const PopUpPercentTechs = ({ percents, idProject, technologies, show, onClose }: IPopUpPercentTechsProps): JSX.Element => {
  const tratedPercentsDecimalToPercentage = treatingTechsToShowPercentage(percents, technologies)

  return show ? (
    <S.PopUpPercentTechs>
      <div className="card">
        {
          tratedPercentsDecimalToPercentage ? (
            <>
              <ul className="statistic-percentages-techs">
                {
                  Object.entries(tratedPercentsDecimalToPercentage).map(([tech, percent], index) => (
                    <BarTechnologie
                      key={`${tech}-percentage`}
                      idProject={idProject}
                      tech={tech}
                      listIcons={techsWhiteListIcon}
                      order={index}
                      percent={percent}
                    />
                  ))
                }
              </ul>
            </>
          ) : (
            <div className="message-not-percent-techs">
              <span><i className='bx bxs-inbox'></i><Translate>Este projeto não possui índices de tecnologias mais usadas!</Translate></span>
            </div>
          )
        }
        <button className="btn-close" onClick={onClose}><i className='bx bx-x' ></i></button>
      </div>
    </S.PopUpPercentTechs>
  ) : <></>
}


export default PopUpPercentTechs