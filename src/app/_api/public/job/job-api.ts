import { requestHandler } from "@/services/server-request";

export async function getJobDetail(
    id: string
){
    const response = await requestHandler(`jobs/${id}`, "GET", null)
    return response
}
