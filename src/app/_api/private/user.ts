import { options } from "@/app/api/auth/[...nextauth]/options";
import { requestHandler } from "@/services/server-request";
import { getServerSession } from "next-auth";

export async function getUserDashboardData(){
    const session = await getServerSession(options)
    const response = await requestHandler<any>("user/dashboard", "GET", session)
    return response.data
}
