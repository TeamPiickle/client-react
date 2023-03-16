import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { MedleyCard } from "../../../types/main";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useMedleyLists() {
  const { data, error } = useSWR<PiickleSWRResponse<MedleyCard[]>>(`${PATH.MEDLEY}`, realReq.GET_SWR);

  return {
    randomMedleyLists: data && [...data.data.data].sort(() => Math.random() - 0.5),
    isLoading: !error && !data,
  };
}
