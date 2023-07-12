
import { useQuery } from "react-query";
import keysQuery from "../constants/keysQuery";

import apiRoutes from "../../services/constants/apiRoutes";
import { IProjectPublic } from "../../types/Project";
import { queryClient } from "../queryClient";
import { api } from "../../services/settings/axios";

async function getProjectsPublic() {
  const { data } = await api.get(apiRoutes.public.GET_PROJECTS)
  return data?.projects ?? null;
}

export default function useFetchProjectsPublic() {
  return useQuery<IProjectPublic[] | null>([keysQuery.PROJECTS_PUBLIC], getProjectsPublic, {
    initialData: queryClient.getQueryData([keysQuery.PROJECTS_PUBLIC]),
    staleTime: 1000 * 60, // 1 minuto
  });
}
