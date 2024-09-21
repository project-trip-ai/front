'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';

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
      const firstResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_URL}/new-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            type: 'newContactNotification',
          }),
        },
      );

      if (firstResponse.ok) {
        const confirmationResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BACK_URL}/new-email`,
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

        if (confirmationResponse.ok) {
          toast.success('Message sent successfully!');
          setFormData({ email: '', subject: '', message: '' });
        } else {
          toast.error('Failed to send confirmation message. Please try again.');
        }
      } else {
        toast.error(
          'Failed to send new contact notification. Please try again.',
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600  p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-16">
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              Got a technical issue? Want to send feedback?
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="Let us know how we can help you"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1">
                Your message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out resize-none"
                placeholder="Leave a comment..."
                value={formData.message}
                onChange={handleChange}
                required></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
