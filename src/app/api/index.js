export const registerUser = async (userData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/verifyTel`, {
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/verifyCode`, {
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/resetPassword`, {
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

export const getUser = async (token) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getUser/${token}`, {
    method: "GET",
    credentials: 'include', 
  });
  if (!response.ok) {
    throw new Error("Failed to get user");
  }
  const data = await response.json();
  return data;
};

export const updatePassword = async (userData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/updatePassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Failed update password");
  }
  const data = await response.json();
  return data;
};

