import { requestHandler } from "@/services/server-request";
import { FeaturedJob } from "@/types/home-types";
import { PaginatedResponse } from "@/types/reusable-types";

export async function getFeaturedJobs(
    {
        page,
        limit,
    }: {
        page: number;
        limit: number;
    }
){
    const response = await requestHandler<PaginatedResponse<FeaturedJob>>(`jobs?page=${page}&take=${limit}`, "GET", null);
    return response.data;
}