import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="">
      <div className="container min-h-screen hero mx-auto">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="">
            <div className="mb-8">
              <h3 className="text-5xl font-bold contact-title">{`Let's chat.`}</h3>
              <h3 className="text-5xl font-bold contact-title">
                Tell me about your
              </h3>
              <h3 className="text-5xl font-bold contact-title">project.</h3>
            </div>
            <p className="text-2xl mb-5">{`Let's create something together.`}</p>
            <ul className="flex gap-3">
              <li className="social-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </li>
              <li className="social-link">
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
            </ul>
          </div>
          <div className="form-container">
            <h3 className="text-3xl font-bold mb-8 text-[#8750f7]">
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
