"use server"

import { requestHandler } from "@/services/server-request";

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