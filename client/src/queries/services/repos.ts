
import { useQuery } from "react-query";
import keysQuery from "../constants/keysQuery";
import apiRoutes from "../../services/constants/apiRoutes";
import { IRepository } from "../../types/repository";
import { queryClient } from "../queryClient";
import { api } from "../../services/settings/axios";

async function getRepos() {
  const { data } = await api.get(apiRoutes.private.GET_REPOSITORIES);
  return data?.repositories ?? null
}

export default function useFetchRepos() {
  return useQuery<IRepository[]>([keysQuery.REPOSITORIES], getRepos, {
    initialData: queryClient.getQueryData([keysQuery.REPOSITORIES]),
    staleTime: 1000 * 60, // 1 minuto
  });
}
