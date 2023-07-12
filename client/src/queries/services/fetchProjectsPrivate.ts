
import { useQuery } from "react-query";
import keysQuery from "../constants/keysQuery";
import apiRoutes from "../../services/constants/apiRoutes";
import { IProjectPrivate } from "../../types/Project";
import { queryClient } from "../queryClient";
import { api } from "../../services/settings/axios";


async function getProjectsPrivate() {
  const { data } = await api.get(apiRoutes.private.GET_PROJECTS);
  return data?.projects || null;
}

export default function useFetchProjectsPrivate() {
  return useQuery<IProjectPrivate[]>([keysQuery.PROJECTS_PRIVATE], getProjectsPrivate, {
    initialData: queryClient.getQueryData([keysQuery.PROJECTS_PRIVATE]),
    staleTime: 1000 * 60, // 1 minuto
  });
}
