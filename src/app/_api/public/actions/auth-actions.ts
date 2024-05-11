"use server"

import { requestHandler } from "@/services/server-request";
import { handleErrorResponse, handleSuccessResponse } from "../../private/utility";

export interface SuccessResponse {
    success: true;
    status?: number;
    message?: string; // Optional success message
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