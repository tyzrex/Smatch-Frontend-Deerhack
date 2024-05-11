"use server"

import { requestHandler } from "@/services/server-request";
import { ErrorResponse, SuccessResponse } from "../public/actions/auth-actions";
import { auth } from "./auth";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

function handleErrorResponse(error: any): ErrorResponse {
    if (error ) {
        return {
            success: false,
            status: error.status || 500,
            errorData: error.errorData,
        };
    }
    return {
        success: false,
        status: 500, // Default fallback status
        errorData: 'An unexpected error occurred',
    };
}

function handleSuccessResponse(response: any, message: string): SuccessResponse {
    return {
        success: true,
        status: response.status,
        message: message,
    };
}

export async function createNewJob(data: any): Promise<SuccessResponse | ErrorResponse>{
    try {
        console.log(data)
        const session = await getServerSession(options)
        const response = await requestHandler("jobs/", "POST", data, session)
        return handleSuccessResponse(response, "Job created successfully");
    } catch (error) {
        console.log(error)
        return handleErrorResponse(error);
    }
}