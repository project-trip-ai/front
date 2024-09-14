export default function Error() {
  return(
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white dark:text-white">ERROR</h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's wrong.</p>
              <p className="mb-4 text-lg font-light text-white dark:text-white">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
              <a href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 font-bold">Back to Homepage</a>
          </div>   
      </div>
    </section>
  );
}