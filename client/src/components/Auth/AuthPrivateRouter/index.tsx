
import { Navigate } from "react-router-dom";
import useFetchVerifyCredential from "../../../queries/services/verifyCredential";



interface IPropsAuthPrivateRouter {
  children: JSX.Element,
  redirect: string,
}

const AuthPrivateRouter = ({
  children, redirect }: IPropsAuthPrivateRouter) => {
  const { data: auth, isFetching } = useFetchVerifyCredential()

  if (!auth && !isFetching) return <Navigate to={redirect} />
  if (auth) return children
  return <></>
}


export default AuthPrivateRouter