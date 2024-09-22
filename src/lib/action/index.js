'use server';
import {
  loginUser,
  registerUser,
  createItinerary,
  createActivity,
} from '@/api';
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
  redirect('/account/profile');
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

    if (data.token) {
      await setCookie(data.token);
    } else {
      return { error: 'Registration failed: No token received' };
    }
  } catch (error) {
    console.error('Registration failed:', error);
    return {
      error: 'Registration failed: ' + (error.message || String(error)),
    };
  }
  redirect('/account/profile');
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

//reset pass
// export async function resetPassword(formData) {
//   const password = formData.get('password');
//   const email = formData.get('email');
//   const token = formData.get('token');
//   const code = formData.get('code');

//   if (token && email) {
//     try {
//       const updatePassword = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/updatePassword`,
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email, password, token }),
//         },
//       );

//       if (updatePassword.ok) {
//         removeCookie('token');
//         redirect('/auth/login');
//       } else {
//         return { error: 'Failed to reset password.' };
//       }
//     } catch (error) {
//       return { error: 'Failed to reset password. Please try again.' };
//     }
//   } else {
//     try {
//       const verifyResponse = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/verifyCode`,
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ code, email }),
//         },
//       );

//       const verifyResult = await verifyResponse.json();
//       if (verifyResponse.ok) {
//         const tokenPassword = verifyResult;
//         const resetResponse = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/resetPassword`,
//           {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ tokenPassword, email, password }),
//           },
//         );

//         if (resetResponse.ok) {
//           redirect('/auth/login');
//         } else {
//           return { error: 'Failed to reset password.' };
//         }
//       } else {
//         return { error: 'Invalid verification code.' };
//       }
//     } catch (err) {
//       return { error: 'Failed to reset password. Please try again.' };
//     }
//   }
// }

export async function updatePassword(email, password, token) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/updatePassword`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, token }),
      },
    );

    if (response.ok) {
      removeCookie('token');
    } else {
      return { error: 'Failed to reset password.' };
    }
  } catch (error) {
    return { error: 'Failed to reset password. Please try again.' };
  }
  redirect('/auth/login');
}

export async function resetPassword(email, code, password) {
  try {
    const verifyResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/verifyCode`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, email }),
      },
    );

    const verifyResult = await verifyResponse.json();
    if (verifyResponse.ok) {
      const tokenPassword = verifyResult;
      const resetResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resetPassword`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tokenPassword, email, password }),
        },
      );

      if (resetResponse.ok) {
        console.log("Reset ok")
      } else {
        return { error: 'Failed to reset password.' };
      }
    } else {
      return { error: 'Invalid verification code.' };
    }
  } catch (err) {
    return { error: 'Failed to reset password. Please try again.' };
  }

  redirect('/auth/login');
}
