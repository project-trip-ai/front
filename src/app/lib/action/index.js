"use server";
import { loginUser } from "@/app/api";
import { setCookie } from "../auth";

export async function loginAction(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    const userData = { email, password };
    const data = await loginUser(userData);

    if (data.token) {
      await setCookie(data.token);
      return { success: true };
    } else {
      return { error: "Login failed: No token received" };
    }
  } catch (error) {
    console.error("Login failed:", error);
    return { error: "Login failed: " + (error.message || String(error)) };
  }
}
