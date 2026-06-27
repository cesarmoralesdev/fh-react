import { heroApi } from "../api/hero.api"
import type { SummarInformationResponse } from "../types/summary-information.response";

export const getSummaryAction = async () => {
    const { data } = await heroApi.get<SummarInformationResponse>('/summary');
    return data;
}