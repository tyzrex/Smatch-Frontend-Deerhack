import { options } from "@/app/api/auth/[...nextauth]/options";
import { requestHandler } from "@/services/server-request";
import { PaginatedResponse } from "@/types/reusable-types";
import { getServerSession } from "next-auth";

export async function getAllJobs({ page, limit }: { page: string; limit: string }
){
    const session = await getServerSession(options)
    const response = await requestHandler<PaginatedResponse<any>>(
            `jobs/company-jobs?page=${page}&take=${limit}`
        , "GET",session)
    return response.data
}

export async function getDashboardData(){
    const session = await getServerSession(options)
    const response = await requestHandler<any>(
            `company/dashboard`
        , "GET",session)
    return response.data
}