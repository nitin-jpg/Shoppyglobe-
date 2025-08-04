import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    setMessage(`Thank you for your query! We will contact you at ${email}.`);
    setEmail("");
  };

  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Website Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">ShoppyGlobe</h3>
          <p>Your one-stop online shop for everything.</p>
          <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
        </div>

        {/* Facebook Link */}
        <div>
          <h3 className="font-bold text-lg mb-3">Connect with Us</h3>
          <a
            href="https://www.facebook.com/shoppyglobe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M22 12.1C22 6.5 17.5 2 12 2S2 6.5 2 12.1c0 5 3.7 9.1 8.5 9.9v-7H8v-3h2.5v-2.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5H15c-1.2 0-1.6.8-1.6 1.6v1.9H18l-.4 3h-2v7c4.8-.8 8.4-4.9 8.4-9.9z" />
            </svg>
            Follow us on Facebook
          </a>
        </div>

        {/* Query Support */}
        <div>
          <h3 className="font-bold text-lg mb-3">Have a Question?</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              className="px-3 py-2 rounded text-black"
              placeholder="Your email address"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setMessage("");
              }}
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Submit
            </button>
          </form>
          {message && (
            <p className="mt-2 text-sm">{message}</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
