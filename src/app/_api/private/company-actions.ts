"use server"

import { requestHandler } from "@/services/server-request";
import { ErrorResponse, SuccessResponse } from "../public/actions/auth-actions";
import { auth } from "./auth";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { handleErrorResponse, handleSuccessResponse } from "./utility";

export async function createNewJob(data: any): Promise<SuccessResponse | ErrorResponse>{
    try {
        const session = await getServerSession(options)
        const response = await requestHandler("jobs/", "POST", session, data)
        return handleSuccessResponse(response, "Job created successfully");
    } catch (error) {
        console.log(error)
        return handleErrorResponse(error);
    }
}

export async function changeJobStatus(
    {id, status}: {id: number, status: string}
): Promise<SuccessResponse | ErrorResponse>{
    try {
        const session = await getServerSession(options)
        const response = await requestHandler(`jobs/update/${id}`, "PUT", session, {
            status: status
        })
        return handleSuccessResponse(response, "Job status changed successfully");
    } catch (error) {
        console.log(error)
        return handleErrorResponse(error);
    }
}