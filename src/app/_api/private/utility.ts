import { ErrorResponse, SuccessResponse } from "../public/actions/auth-actions";

export function handleErrorResponse(error: any): ErrorResponse {
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

export function handleSuccessResponse(response: any, message: string): SuccessResponse {
    return {
        success: true,
        status: response.status,
        message: message,
    };
}