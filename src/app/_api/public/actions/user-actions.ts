"use server"

import { options } from "@/app/api/auth/[...nextauth]/options"
import { requestHandler } from "@/services/server-request"
import { getServerSession } from "next-auth"
import { handleErrorResponse, handleSuccessResponse } from "../../private/utility"

export const applyJob = async (jobId: string) => {
    try{
        const session = await getServerSession(options)
        const response = await requestHandler("jobs/apply-job", "POST", session, {
            jobId: jobId
        })
        return handleSuccessResponse(response, "Job applied successfully")
    }
    catch(error){
        return handleErrorResponse(error)
    }
}