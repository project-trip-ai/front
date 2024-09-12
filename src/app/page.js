import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">One click connects you to the world.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200">The ultimate travel assistant that turns planning into a magical experience.</p>
            <a href="/plan-trip" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:ring-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900 dark:focus:ring-white">
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
              <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-gray-900">Titre</p>
          </div>   
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"></img>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"></img>
        </div>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extraboldtext-gray-900">Let's create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg text-gray-200">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
              <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">How it works</p>
          </div>   
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Let's create more tools and ideas that brings us together.</h2>
              <p className="mb-6 font-light md:text-lg text-white">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
          </div>
          <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"></img>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"></img>
          <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Let's create more tools and ideas that brings us together.</h2>
              <p className="mb-6 font-light md:text-lg text-white">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
          </div>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Let's create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light md:text-lg text-white">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
          </div>
          <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"></img>
        </div>
    </section>
    <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Titre</p>
          </div>   
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"></img>
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Let's create more tools and ideas that brings us together.</h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg text-gray-200">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            </div>
        </div>
    </section>
    <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">Start exploring</h2>
              <p className="font-light sm:text-xl text-white">Explore popular destinations and start planning your Mindtrip.</p>
          </div> 
          <div className="grid gap-2 lg:grid-cols-2">        
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>

          </div>    
        </div>
    </section>
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Designed for business teams like yours</h2>
              <p className="text-gray-500 sm:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Marketing</h3>
                  <p className="text-gray-500 ">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
              </div>
              <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Legal</h3>
                  <p className="text-gray-500 ">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
              </div>
              <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Business Automation</h3>
                  <p className="text-gray-500 ">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
              </div>
              <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Finance</h3>
                  <p className="text-gray-500 ">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
              </div>
              <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Enterprise Design</h3>
                  <p className="text-gray-500 ">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
              </div>
              <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Operations</h3>
                  <p className="text-gray-500 ">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
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
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""></img>
                  </div>
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""></img>
                  </div>
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""></img>
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""></img>
                  </div>
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""></img>
                  </div>
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""></img>
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""></img>
                  </div>
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""></img>
                  </div>
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""></img>
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""></img>
                  </div>
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""></img>
                  </div>
                  <div>
                      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""></img>
                  </div>
              </div>
          </div>

        </div>
        <div className="me-auto place-self-center lg:col-span-4">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            Captured memories collection
          </h1>
          <p className="mb-6 text-white">Reserve your new Apple iMac 27” today and enjoy exclusive savings with qualified activation. Pre-order now to secure your discount.</p>
        </div>
      </div>
    </section>
    </>
    
  );
}
