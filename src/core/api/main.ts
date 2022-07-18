import useSWR from "swr";

import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 전체 카테고리 조화
export function useCategoryLists() {
  const { data, error } = useSWR(PATH.CATEGORIES, realReq.GET_SWR);

  return {
    categoryLists: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

// 베스트 5 피클 조회
export function useBestPiickle() {
  const { data, error } = useSWR(`${PATH.CARDS}/best`, realReq.GET_SWR);

  return {
    bestPiickle: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBallotLists() {
  const { data, error } = useSWR(`${PATH.BALLOTS}`, realReq.GET_SWR);

  return {
    ballotLists: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}
