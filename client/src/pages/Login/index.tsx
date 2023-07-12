

import useLogin from "../../hooks/form/useLogin"
import * as S from "./styles"

const Login = (): JSX.Element => {
  const { registerForm, registerInput, errors } = useLogin()
  return (
    <S.Login>
      <div className="card">
        <h2>Login</h2>
        <form {...registerForm}>
          <div className="input">
            <label htmlFor="name">Nome</label>
            <input id="name" maxLength={30} {...registerInput("name")} />
            <span className="helper-text">{errors.name?.message}</span>
          </div>
          <div className="input">
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" maxLength={30} {...registerInput("password")} />
            <span className="helper-text">{errors.password?.message}</span>
          </div>
          <button>Logar</button>
        </form>
      </div>
    </S.Login>
  )
}

export default Login