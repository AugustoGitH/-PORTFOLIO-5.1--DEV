import * as S from "./styles"

const ProjectLoading = (): JSX.Element => {
  return (
    <S.ProjectLoading className="project">
      <S.ImagesCover>
        <div className="cover gradient" />
        <ul className="images-project">
          <li className="gradient" />
          <li className="gradient" />
          <li className="gradient" />
          <li className="gradient" />
        </ul>
      </S.ImagesCover>
      <S.Description>
        <ul className="technologies">
          <li className="gradient" />
          <li className="gradient" />
          <li className="gradient" />
          <li className="gradient" />
        </ul>
        <span className="h4-line gradient" />
        <span className="h2-line gradient" />
        <ul className="nav">
          <li className="gradient" />
          <li className="gradient" />
          <li className="gradient" />
        </ul>
        <ul className="statistics">
          <li className="button gradient" />
          <li className="button gradient" />
          <li className="text gradient" />
          <li className="text gradient" />
        </ul>
      </S.Description>
    </S.ProjectLoading>
  )
}


export default ProjectLoading