import { options } from "@/app/api/auth/[...nextauth]/options";
import { requestHandler } from "@/services/server-request";
import { getServerSession } from "next-auth";

export async function getUserDashboardData(){
    const session = await getServerSession(options)
    const response = await requestHandler<any>("user/dashboard", "GET", session)
    return response.data
}

export async function getAppliedJobs(
    {page, limit} : {page: string, limit: string}
){
    const session = await getServerSession(options)
    const response = await requestHandler<any>(`jobs/applied-jobs?page=${page}&take=${limit}`, "GET", session)
    return response.data
}


export async function getAppliedJobStatus(jobId: string){
    const session = await getServerSession(options)
    const response = await requestHandler<any>(`jobs/job-status/${jobId}`, "GET", session)
    return response.data
}