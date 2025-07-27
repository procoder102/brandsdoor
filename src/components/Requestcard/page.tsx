export default function Requestcard () {
  return (
    <div className=" flex flex-col md:flex-row justify-evenly bg-gray-200   border border-gray-200 rounded-lg shadow-sm dark:bg-white-800 dark:border-gray-700">
    <div className="w-auto md:w-[40%] mx-5 md:mx-0 my-3  md:my-auto ">
        <h1 className="text-lg font-semibold mb-4 dark:text-[#fdd007]">Request Quota</h1>
<h2 className="text-md font-medium mb-2 text-gray-500">
        For Business: Fill out our feedback form
      </h2>
      <p className="mb-4 text-gray-500">
        Toll-Free Number: <strong>(+91) 9818752056</strong>. Our team will reach out to you soon.
      </p>
    </div>
  
    <div className=" my-5 w-auto md:w-[40%] p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white-800 dark:border-white-700">
      <form className=" mx-auto">
        <input
          type="text"
          name="name"
          className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#fefde7]"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          name="email"
          className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#fefde7]"
          placeholder="Enter your email"
          required
        />
        <input
          type="tel"
          name="phone"
          className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#fefde7]"
          placeholder="Enter your phone number"
          required
        />
        <textarea
          name="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 my-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#fefde7]"
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
  
</div>
)
}