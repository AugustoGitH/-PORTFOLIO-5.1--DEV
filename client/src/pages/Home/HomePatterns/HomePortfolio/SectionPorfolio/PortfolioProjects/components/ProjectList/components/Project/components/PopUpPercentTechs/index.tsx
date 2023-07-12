



import techsWhiteListIcon from "../../../../../../../../../../../../settings/techsWhiteListIcon"
import treatingTechsToShowPercentage from "../../../../../../../../../../../../utils/treatingTechsToShowPercentage"
import * as S from "./styles"
import { type IPopUpPercentTechsProps, type IBarTechnologieProps } from "./types"


const BarTechnologie = ({ tech, percent, order, idProject, listIcons }: IBarTechnologieProps): JSX.Element => {
  return (
    <S.BarTechnologie order={order} percent={percent} tech={tech} id={idProject}>
      <div className="icon-tech">
        {listIcons.find((techList) => techList.tech === tech)?.icon}
      </div>
      <div className="bar-percent-container">
        <div className="bar-percent-content">
          <span className="percent-tech">{`${percent}%`}</span>
        </div>
      </div>
    </S.BarTechnologie>
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
                      percent={percent as number}
                    />
                  ))
                }
              </ul>
            </>
          ) : (
            <div className="message-not-percent-techs">
              <span><i className='bx bxs-inbox'></i>Este projeto não há indices de tecnologias mais usadas</span>
            </div>


          )
        }
        <button className="btn-close" onClick={onClose}><i className='bx bx-x' ></i></button>
      </div>
    </S.PopUpPercentTechs>
  ) : <></>
}


export default PopUpPercentTechs