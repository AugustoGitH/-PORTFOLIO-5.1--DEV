
import { useQuery } from "react-query"
import apiRoutes from "../../services/constants/apiRoutes";
import { api } from "../../services/settings/axios";



async function getVerifyCredential(){
  const { data } = await api.get(apiRoutes.public.VERIFY_CREDENTIALS)
  return data?.isAuthenticated ?? false
}

export default function useFetchVerifyCredential(){
  return useQuery<boolean>(["verify-credential"], getVerifyCredential)
}