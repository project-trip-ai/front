// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { fetchGraphQL } from "@/services/fetchGraphQl";
// import { GET_ME } from "@/graphql/queries/user";
// import { cookies } from "next/headers";

// export async function middleware(request: NextRequest) {

// 	const url = new URL(request.url);
// 	url.pathname = "/auth/login";
// 	const cookiesStore = cookies();
// 	const token = cookiesStore.get("token") || undefined;
// 	if (!token) {
// 		return NextResponse.redirect(url.toString());
// 	} else {
// 		const me = await fetchGraphQL(GET_ME, {}, `${token.value}`);
// 		if (me?.data) {
// 			// TODO TO FIXED
// 			request.cookies.set({
// 				name: "token",
// 				value: token.value,
// 				path: "/",
// 				httpOnly: true,
// 				domain: `${process.env.NODE_ENV === "production"}` === "true" ? process.env.FRONTEND_URL : "localhost",
// 				maxAge: 24 * 60 * 60,
// 				sameSite: "strict",
// 				secure: `${process.env.NODE_ENV === "production"}` === "true" ? true : false,
// 			});
// 			return NextResponse.next();
// 		} else {
// 			const response = NextResponse.redirect(url.toString());
// 			response.cookies.delete("token");
// 			return response;
// 		}
// 	}
// }

// export const config = {
// 	matcher: "/account/:path*",
// };
