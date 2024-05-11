"use server"

import { requestHandler } from "@/services/server-request";
import { handleErrorResponse, handleSuccessResponse } from "../../private/utility";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export interface SuccessResponse {
    success: true;
    status?: number;
    message?: string; // Optional success message
    data?: any; // Consider using a more specific type if possible
}

export interface ErrorResponse {
    success: false;
    status: number;
    errorData: any; // Consider using a more specific type if possible
}



export async function registerUser(data: FormData) : Promise<SuccessResponse | ErrorResponse> {
    try {
      const response = await requestHandler("auth/register", "POST", null, data)
      return handleSuccessResponse(response, "User registered successfully");
    } catch (error) {
        return handleErrorResponse(error);
    }
}


export async function registerCompany(data: FormData) : Promise<SuccessResponse | ErrorResponse> {
    try {
      const response = await requestHandler("company/register", "POST", null, data)
      return handleSuccessResponse(response, "Company registered successfully");
    } catch (error) {
        return handleErrorResponse(error);
    }
}

export async function getQueryAnswer(query: string) : Promise<SuccessResponse | ErrorResponse> {
    try {
      const session = await getServerSession(options)
      const response = await requestHandler("chat/ask", "POST", session, {
        query: query
      })
      return handleSuccessResponse(response, "Query answered successfully");
    } catch (error) {
        return handleErrorResponse(error);
    }
}