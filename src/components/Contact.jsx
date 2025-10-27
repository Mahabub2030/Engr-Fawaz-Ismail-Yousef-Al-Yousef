import Lottie from 'lottie-react';
import { useRef, useState } from 'react';
import contact from '../assets/Contact.json';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(formRef.current);
    // ✅ Your Web3Forms access key
    formData.append('access_key', '56c2cc3f-c0a1-4761-aeda-cf757b3415d3');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message Sent Successfully ✅');
        formRef.current.reset();
      } else {
        setStatus('Error ❌ Something went wrong.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Network Error ❌ Try again later.');
    }
  };

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              I m always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mb-5">
              <a href="#" className="hover:opacity-80 transition">
                <img src={facebook} alt="facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src={instagram} alt="instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src={linkedin} alt="linkedin" className="h-6 w-6" />
              </a>
            </div>

            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>

          {/* Right Section (Form) */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm
                focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm
                focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Enter your message"
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm
                focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

            {/* Status Message */}
            <p className="mt-4 text-sm text-gray-700 font-medium">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
