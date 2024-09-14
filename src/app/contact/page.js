export default function Contact() {
  return(
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-10">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-white sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form action="#" className="space-y-8">
              <div>
                  <label for="email" className="block mb-2 text-lg font-medium text-white dark:text-white">Your email :</label>
                  <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required></input>

              </div>
              <div>
                  <label for="subject" className="block mb-2 text-lg font-medium text-white dark:text-white">Subject :</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-white shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
              </div>
              <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 text-lg font-medium text-white dark:text-white">Your message : </label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-white focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="inline-flex items-center px-6 py-4 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
          </form>
      </div>
    </section>
  );
}