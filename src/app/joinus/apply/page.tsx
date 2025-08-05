import React from 'react'

export default function Apply() {
  return (
    <section className='pt-20'>
      <div>
        <div className='grid grid-col-3 m-5 justify-center'>
          <div><p className='dark:text-[#fefde7] text-center tracking-[5px]'>- Perks -</p></div>
          <div><h1 className='dark:text-[#ffee32] text-center text-[36px] tracking-[2px]'>Apply Now</h1></div>
        </div>
      </div>
      <div className=" my-5 mx-auto w-auto md:w-[60%] p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white-800 dark:border-white-700">
      <form className="px-10 ">
        <input
          type="text"
          name="name"
          className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#061127]"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          name="email"
          className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#061127]"
          placeholder="Enter your email"
          required
        />
        <input
          type="number"
          name="phone"
          className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#061127]"
          placeholder="Enter your phone number"
          required
        />
        <input type="file" className="file-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 "  required/>
        <textarea
          name="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 my-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#061127]"
          placeholder="Write your message here..."
        ></textarea>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  
    </section>
  )
}
