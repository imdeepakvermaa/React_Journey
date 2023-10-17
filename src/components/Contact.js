
const Contact = () => {
    return (
    <div className="bg-orange-300 py-16">
      <div className="container mx-auto flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">We're here to assist you. Feel free to reach out.</p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-bold mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-1 focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 font-bold mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-600 font-bold mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-300 text-black font-bold rounded-md py-2 px-4 hover:bg-orange-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
