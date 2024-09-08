"use server";
import { loginUser, registerUser } from "@/app/api";
import { setCookie, removeCookie } from "../auth";

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

export async function registerAction(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");

  if (!email || !password || !firstname || !lastname) {
    return { error: "All fields are required" };
  }

  try {
    const userData = { email, password, firstname, lastname };
    const data = await registerUser(userData);
    console.log(data, "data");

    if (data.token) {
      await setCookie(data.token);
      return { success: true };
    } else {
      return { error: "Registration failed: No token received" };
    }
  } catch (error) {
    console.error("Registration failed:", error);
    return {
      error: "Registration failed: " + (error.message || String(error)),
    };
  }
}

export async function logout() {
  removeCookie();
  redirect(`/auth/login`);
}
