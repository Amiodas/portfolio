import React from "react";

const Contact = () => {
  return (
    <div className="">
      <div className="container min-h-screen hero mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="">
            <div className="mb-8 text-teal-500">
              <h3 className="text-5xl font-bold">Let's chat.</h3>
              <h3 className="text-5xl font-bold">Tell me about your</h3>
              <h3 className="text-5xl font-bold">project.</h3>
            </div>
            <p className="text-xl mb-5">Let's create something together.</p>
            <ul className="flex gap-5">
              <li>Gmail</li>
              <li>Linked In</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold mb-8 text-teal-500">
              Send Message
            </h3>
            <form action="">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="mb-5">
                <textarea
                  className="textarea textarea-bordered w-full max-w-xs"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button className="btn bg-teal-500 text-black">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
