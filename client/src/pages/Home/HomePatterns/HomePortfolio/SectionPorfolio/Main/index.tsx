



import * as S from "./styles"
const Main = (): JSX.Element => {
  return (
    <S.Main>
      <S.TechPresentation>
        <h3>
          DEVELOPER FULL-STACK
          <i className='bx bxs-hot' ></i>
        </h3>
        <article>
          <h2>Meu nome é</h2>
          <h1>
            Augusto
            {" "}<span id="sobrenome-ocult"> Westphal</span>
          </h1>
        </article>
        <div className="skills">
          <p>Também sou</p>
          <ul>
            <li>Web <br />Designer</li>
            <li>Graphic <br />Designer</li>
          </ul>
        </div>
        <a href="#contact">
          <i className='bx bxs-mouse-alt'></i>
          Entre em contato
        </a>
      </S.TechPresentation>
      <S.ProfileImage>
        <div className="profile-content">
          <img src="/images/profile-02.webp" alt="Imagem do Augusto gerada por IA" width={300} height={300} />
        </div>
      </S.ProfileImage>
    </S.Main>
  )
}

export default Main