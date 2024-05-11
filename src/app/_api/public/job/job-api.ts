import { requestHandler } from "@/services/server-request";
import { JobDetail } from "@/types/reusable-types";

export async function getJobDetail(
    id: string
){
    const response = await requestHandler<JobDetail>(`jobs/${id}`, "GET", null)
    return response.data
}
