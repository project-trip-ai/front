import { cookies } from "next/headers";
import { getUser } from "@/app/api";
export const setCookie = async (token) => {
  const cookieStore = cookies();
  await cookieStore.set({
    name: "token",
    value: token,
    path: "/",
    httpOnly: true,
    domain:
      `${process.env.NODE_ENV === "production"}` === "true"
        ? process.env.FRONTEND_URL
        : "localhost",
    maxAge: 24 * 60 * 60,
    sameSite: "strict",
    secure:
      `${process.env.NODE_ENV === "production"}` === "true" ? true : false,
  });
};

export const removeCookie = async () => {
  const cookieStore = cookies();
  cookieStore.delete("token");
};

export async function isUserLoggedIn() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  try {
    const userData = await getUser(token.value);
    return true;
  } catch (error) {
    return false;
  }
}

export async function getUserCookies() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  try {
    const userData = await getUser(token.value);
    return userData;
  } catch (error) {
    return false;
  }
}

