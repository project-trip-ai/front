import { toast } from 'react-toastify';
export const registerUser = async userData => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Failed to register user');
  }
  const data = await response.json();
  return data;
};

export const loginUser = async userData => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Failed to login user');
  }
  const data = await response.json();
  return data;
};

export const sendNumber = async telData => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/verifyTel`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(telData),
    },
  );
  if (!response.ok) {
    throw new Error('Failed send code');
  }
  const data = await response.json();
  return data;
};
export const sendCode = async code => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/verifyCode`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(code),
    },
  );
  if (!response.ok) {
    throw new Error('Failed send code');
  }
  const data = await response.json();
  return data;
};

export const resetPassword = async resetData => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/resetPassword`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resetData),
    },
  );
  if (!response.ok) {
    throw new Error('Failed send code');
  }
  const data = await response.json();
  return data;
};

export const getUser = async token => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/getUser/${token}`,
    {
      method: 'GET',
      credentials: 'include',
    },
  );
  if (!response.ok) {
    throw new Error('Failed to get user');
  }
  const data = await response.json();
  return data;
};

export const updatePassword = async userData => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/updatePassword`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    },
  );
  if (!response.ok) {
    throw new Error('Failed update password');
  }
  const data = await response.json();
  return data;
};

//Itinerary

export const createItinerary = async itineraryData => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/createItinerary`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itineraryData),
    },
  );
  if (!response.ok) {
    throw new Error('Failed to create a new itinerary');
  }
  const data = await response.json();
  return data;
};

export const getItineraryById = async id => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/getItinerary/${id}`,
    {
      method: 'GET',
    },
  );
  if (!response.ok) {
    throw new Error('Failed get itinerary');
  }
  const data = await response.json();
  return data;
};

export const getRecentItineraries = async id => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/recentItinerary`,
    {
      method: 'GET',
    },
  );
  if (!response.ok) {
    throw new Error('Failed get recent itinerary');
  }
  const data = await response.json();
  return data;
};

//activities
export const createActivity = async activityData => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/createActivity`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activityData),
    },
  );
  if (!response.ok) {
    throw new Error('Failed to create a new activity');
    console.log(response);
  }
  const data = await response.json();
  return data;
};

export const getActivitiesByItineraryId = async id => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/getActivities/${id}`,
    {
      method: 'GET',
    },
  );
  if (!response.ok) {
    throw new Error('Failed get itinerary');
  }
  const data = await response.json();
  return data;
};

export const deleteActivity = async (id, userToken) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/deleteActivity/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: userToken }),
    },
  );
  if (!response.ok) {
    throw new Error('Failed to delete activity');
  }
  const data = await response.json();
  return data;
};
