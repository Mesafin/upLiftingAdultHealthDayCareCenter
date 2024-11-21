
export default function Contact() {
    return (
      <div className="w-1/2 mx-auto p-4 min-h-96 pb-28">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-xl">
          Have questions or need assistance? Please fill out the form below, and we’ll get back to you as soon as possible.
        </p>
  
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Your name"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Your email"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  