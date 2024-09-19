'use server';
import {
  loginUser,
  registerUser,
  createItinerary,
  createActivity,
} from '@/app/api';
import { setCookie, removeCookie } from '../auth';
import { redirect } from 'next/navigation';

export async function loginAction(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    const userData = { email, password };
    const data = await loginUser(userData);

    if (data.token) {
      await setCookie(data.token);
      return { success: true };
    } else {
      return { error: 'Login failed: No token received' };
    }
  } catch (error) {
    console.error('Login failed:', error);
    return { error: 'Login failed: ' + (error.message || String(error)) };
  }
}

export async function registerAction(formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');

  if (!email || !password || !firstname || !lastname) {
    return { error: 'All fields are required' };
  }

  try {
    const userData = { email, password, firstname, lastname };
    const data = await registerUser(userData);
    console.log(data, 'data');

    if (data.token) {
      await setCookie(data.token);
      return { success: true };
    } else {
      return { error: 'Registration failed: No token received' };
    }
  } catch (error) {
    console.error('Registration failed:', error);
    return {
      error: 'Registration failed: ' + (error.message || String(error)),
    };
  }
}

export async function logout() {
  removeCookie();
  redirect(`/auth/login`);
}

//itinerary

export async function createItineraryAction(formData) {
  if (!formData.destination) {
    return { error: 'You have to select a destination' };
  }

  if (!formData.startDate || !formData.endDate) {
    return { error: 'You have to select the dates' };
  }

  if (formData.nbPerson > 1 && formData.typeGroup === 'SOLO') {
    return {
      error: 'You have to select the type of group you are traveling with',
    };
  }

  try {
    // const itineraryData = { formData };
    const data = await createItinerary(formData);

    if (data) {
      return data;
    } else {
      return {
        error: 'We were not able to create a new trip: try again.',
      };
    }
  } catch (error) {
    console.error('Trip creation failed: ', error);
    return {
      error: 'Trip creation failed: ' + (error.message || String(error)),
    };
  }
}

//activities

export async function createActivityAction(formData) {
  if (!formData.name) {
    return { error: 'You have to select a destination' };
  }

  try {
    // const itineraryData = { formData };
    const data = await createItinerary(formData);

    if (data) {
      return data;
    } else {
      return {
        error: 'We were not able to create a new activity: try again.',
      };
    }
  } catch (error) {
    console.error('Trip creation failed: ', error);
    return {
      error: 'Activity creation failed: ' + (error.message || String(error)),
    };
  }
}
