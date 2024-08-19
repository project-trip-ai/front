import { cookies } from "next/headers";

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
