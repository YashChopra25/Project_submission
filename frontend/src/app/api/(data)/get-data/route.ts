import { NextRequest, NextResponse } from "next/server";
import axios, { isAxiosError } from "axios"
import { GetTokenData } from "@/lib/GetToken";
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const { decoded, token } = GetTokenData()
        if (!token || !decoded) {
            return NextResponse.json({ status: false, message: "Unauthorized" })
        }
        const { data, status } = await axios.get(`${process.env.BACKEND_URL}/api/v1/get-data/${decoded?.id}`);
        const actualData = data?.data;
        const customobject: any = {}
        actualData?.map((item: { usedFor?: any; dataset?: any; name?: any; email?: any; }) => {
            Object.keys(item).forEach((key) => {
                customobject[item.usedFor] = item.dataset
            })
        })
        customobject["name"] = decoded?.name
        customobject["email"] = decoded?.email
        const response = NextResponse.json({
            status: data.status,
            data: customobject,
            message: data.message
        }, { status });
        if (data.status) {
            return response
        }
        return response;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error);
            const message = (error.response?.data?.message) || "Something went wrong"
            return NextResponse.json({
                status: false,
                message,
            }, { status: 403 });
        }
        return NextResponse.json({
            status: false,
            error: error,
            message: "Something went wrong while Signin"
        }, { status: 500 });
    }
}