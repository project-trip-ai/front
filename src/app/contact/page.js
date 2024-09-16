'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/new-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            type: 'contactConfirmation',
          }),
        },
      );

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-10">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Got a technical issue? Want to send feedback?
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-white">
              Your email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-white border text-black text-sm rounded-lg block w-full p-2.5"
              placeholder="name@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-lg font-medium text-white">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-black bg-white rounded-lg border"
              placeholder="Let us know how we can help you"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-white">
              Your message:
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-white rounded-lg border"
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleChange}
              required></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-4 text-sm font-medium text-white bg-transparent border border-white rounded-lg hover:bg-blue-800">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
