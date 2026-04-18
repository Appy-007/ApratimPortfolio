import React from 'react'

const WorkExperience = () => {
  return (
    <div
        id="workExperience"
        className="scroll-mt-20 flex flex-col items-center mb-20"
      >
         <h1 className="text-center px-5 text-4xl ">Work Experience</h1>
         <div className="p-5 max-w-2xl mt-8 mx-4 sm:mx-auto border border-gray-700 dark:text-gray-400 rounded-md shadow-lg shadow-gray-900 hover:-translate-y-1 duration-500">
            <h2 className='text-lg md:text-xl font-semibold my-2'>Assistant Engineer:Web at Codeclouds IT Solutions Pvt Ltd.  (March 2025-Present)</h2>

            <ul className='list-disc pl-5 max-sm:text-sm'>
              <li>Assisted in developing and maintaining a client based project where I worked on Reactjs framework named Ant Design Pro to create role based components with advanced filtering and searching functionality.Created nestjs controllers and providers for different services and used mongodb aggregation pipelines for complex query operations.</li>
              <li>
                 Built a Shopify app integrating Shopify Analytics and ShopifyQL to fetch and process storefront data, with a clean and responsive UI using Shopify Polaris.
              </li>
              <li>
                Built a Next.js app with SSR, caching, and proxy-based authentication for speed and security.
              </li>
            </ul>

           
         </div>
    </div>
  )
}

export default WorkExperience