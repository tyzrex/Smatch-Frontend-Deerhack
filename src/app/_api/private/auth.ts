import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function auth(){
    const session = await getServerSession(options)
    console.log(session)
    return session?.user
}