const BASE_URL = "http://localhost:3000/api";

export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }
  const data = await response.json();
  return data;
};

export const loginUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to login user");
  }
  const data = await response.json();
  return data;
};

export const sendNumber = async (telData) => {
  const response = await fetch(`${BASE_URL}/verifyTel`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(telData),
  });
  if (!response.ok) {
    throw new Error("Failed send code");
  }
  const data = await response.json();
  return data;
};
export const sendCode = async (code) => {
  const response = await fetch(`${BASE_URL}/verifyCode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(code),
  });
  if (!response.ok) {
    throw new Error("Failed send code");
  }
  const data = await response.json();
  return data;
};

export const resetPassword = async (resetData) => {
  const response = await fetch(`${BASE_URL}/resetPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resetData),
  });
  if (!response.ok) {
    throw new Error("Failed send code");
  }
  const data = await response.json();
  return data;
};
