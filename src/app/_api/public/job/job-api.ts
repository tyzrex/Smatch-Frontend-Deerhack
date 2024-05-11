import { requestHandler } from "@/services/server-request";

export async function getJobDetail(
    id: string
){
    const response = await requestHandler(`job/${id}`, "GET", null)
    return response
}
