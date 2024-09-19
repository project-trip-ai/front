import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-500 via-orange-500 to-pink-500">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              One click connects you to the world 🤩.{' '}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-base lg:text-lg dark:text-gray-200">
              With just one click, unlock a world of adventure. Explore new
              places, discover hidden gems, and create unforgettable memories -
              all effortlessly tailored to you. Start your journey today and
              discover how easy it is to travel your way.
            </p>
            <a
              href="/plan-trip"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:ring-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900 dark:focus:ring-white">
              Get started
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/hero.png" alt="banner"></img>
          </div>
        </div>
      </div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-gray-900">
              ✨ Your Journey, Your Way ✨
            </p>
          </div>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"></img>
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"></img>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Take control of your travel plans with personalized itineraries
              that fit your schedule.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg text-gray-200">
              {' '}
              Based on your preferences, we suggest activities tailored just for
              you. Whether you're looking for adventure, relaxation, or a bit of
              both, the choices are in your hands. Plan each day your way,
              effortlessly.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
              How it works 🤔
            </p>
          </div>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Tailor your experience.
            </h2>
            <p className="mb-6 font-light md:text-lg text-white">
              Start by filling out a detailed quiz to tell us about your ideal
              trip - type of travel, duration, number of travelers, destination,
              and more. Once you've entered this information, you’ll unlock a
              customizable itinerary designed just for you.
            </p>
          </div>
          <img
            className="w-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"></img>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"></img>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Start chatting with us.
            </h2>
            <p className="mb-6 font-light md:text-lg text-white">
              Let us know what you'd like to do with your free time, from
              activities to dining preferences - vegetarian or not. Based on
              your input, we’ll provide a personalized list of suggestions to
              make your trip truly unforgettable.
            </p>
          </div>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Customize & share
            </h2>
            <p className="mb-6 font-light md:text-lg text-white">
              Fine-tune your itinerary by adding or adjusting activities from
              our recommendations. Save your plans and share them with family or
              friends, making it easy to coordinate and enjoy the trip together.
            </p>
          </div>
          <img
            className="w-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"></img>
        </div>
      </section>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Know before you go 🔍
            </p>
          </div>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"></img>
          <div className="mt-4 md:mt-0">
            <p className="mb-6 font-light text-gray-500 md:text-xl text-gray-600">
              Before embarking on your journey, dive into all the essential
              details about your destination. Explore photos 🖼, read reviews
              👀, check prices 💸, and view maps 🗺 to get a comprehensive feel
              for the place. With all this information at your fingertips,
              you’ll arrive feeling like you’ve already been there.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
              Start exploring 🧐
            </h2>
            <p className="font-light sm:text-xl text-white">
              Discover top destinations and begin crafting your perfect trip.
            </p>
          </div>
          <div className="grid gap-2 lg:grid-cols-2">
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Keep everything organized in one place 🤭
            </h2>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-4xl">
                🪂
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Top attractions nearby
              </h3>
              <p className="text-gray-500 ">
                Uncover must-see landmarks and hidden gems close to your
                destination.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-4xl">
                ✍️
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Custom travel plans
              </h3>
              <p className="text-gray-500 ">
                Personalize your itinerary with recommendations that match your
                travel style and interests.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-4xl">
                🍽
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Restaurants for every taste
              </h3>
              <p className="text-gray-500 ">
                Explore dining options that fit your taste and dietary
                preferences, including vegetarian and local specialties.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-4xl">
                📸
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Local insights and tips
              </h3>
              <p className="text-gray-500 ">
                Access insider knowledge and tips to make the most of your
                destination, like a local.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-8 antialiased md:py-16">
        <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
          <div className="lg:col-span-8 lg:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img1.jpg"
                    alt=""></img>
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img5.jpg"
                    alt=""></img>
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img9.jpeg"
                    alt=""></img>
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img4.jpg"
                    alt=""></img>
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img2.jpg"
                    alt=""></img>
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img6.jpg"
                    alt=""></img>
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img3.jpg"
                    alt=""></img>
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img8.jpg"
                    alt=""></img>
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img11.jpg"
                    alt=""></img>
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img10.jpeg"
                    alt=""></img>
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img7.jpg"
                    alt=""></img>
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="/homepage/memories/img12.jpg"
                    alt=""></img>
                </div>
              </div>
            </div>
          </div>
          <div className="me-auto place-self-center lg:col-span-4">
            <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Capture your memories and Tag us 🥰
            </h1>
            <p className="mb-6 text-white">
              Tag us in your travel photos on your next trip and join our
              community of explorers. We’d love to see and share your
              unforgettable moments!
            </p>
            <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              #wizardplanner
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
