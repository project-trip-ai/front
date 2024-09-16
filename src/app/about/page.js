import Link from "next/link";
export default function About() {
  return(
    <>
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                  <div className="w-full flex-col justify-center items-start gap-8 flex">
                      <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">About us 🤗</h2>
                          <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                              <h4
                                  className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
Our mission is simple: connect you to the world and empower you to travel your way, effortlessly.</h4>
                              <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                              We’re driven by a love for travel and believe that planning your trip should be just as exciting as the adventure itself. But we know how time-consuming it can be to find the perfect balance between exploring ideas and staying organized. That’s why we built a platform designed to make travel planning easier and more personalized. With our intelligent system, we offer:
                             <ul>
                                <li> - Tailored travel suggestions based on your preferences</li>
                                <li> - Fully customizable and shareable itineraries</li>
                                <li> - Gorgeous photos, interactive maps, and honest reviews</li>
                                <li> - An all-in-one place to keep everything organized</li>
                             </ul>
                             </p>
                          </div>
                      </div>
                  </div>
                  <Link href="/contact" className="inline-flex items-center px-4 py-2 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact us</Link>
              </div>
              <div className="w-full lg:justify-start justify-center items-start flex">
                  <div
                      className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                      <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                          src="/about/trip.jpg" alt="about Us image" />
                  </div>
              </div>
          </div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team 👋</h2>
            <p className="font-light text-white sm:text-xl dark:text-white">Meet the team dedicated to making your travels amazing. We're here to ensure your journey is unforgettable.</p>
        </div> 
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            <div className="text-center text-white">
                <img className="mx-auto mb-4 w-24 h-36 rounded-full" src="/about/yaya.png" alt="Bonnie Avatar"></img>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Ngoc Ha Lan DANG</p>
                </h3>
                <p>Team Leader, Lead Backend Developer</p>
            </div>
            
            <div className="text-center text-white">
                <img className="mx-auto mb-4 w-24 h-36 rounded-full" src="/about/ryme.png" alt="Bonnie Avatar"></img>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Ryme LEHNA</p>
                </h3>
                <p>Lead Développeur AI</p>
            </div>

            <div className="text-center text-white">
                <img className="mx-auto mb-4 w-24 h-36 rounded-full" src="/about/ks.png" alt="Bonnie Avatar"></img>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Kejsi EGRO</p>
                </h3>
                <p>Lead Frontend Developer</p>
            </div>
        </div>  
    </div>
  </section>    
     
    </>
                                
  );
}