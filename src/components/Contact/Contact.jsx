// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="py-16">
      <div id="contact" className="container min-h-screen hero mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="">
            <div className="mb-3">
              <h3 className="text-5xl font-extralight contact-title">{`How can I help?`}</h3>
            </div>
            <p className="mb-5">{`I am here to help and answer any question you might have, We look orward to hearing from you 😃`}</p>

            {/* Card */}
            <div className="space-y-6 mt-8">
              <div className="card">
                <div className="bg-[#140c1c] p-5 rounded-md">
                  <div className="flex">
                    <div className="flex gap-4">
                      <div className="custom-bullet"></div>
                      <h5 className="mr-5">Meet with the developers team</h5>
                    </div>
                    <FontAwesomeIcon className="mt-1" icon={faArrowRight} />
                  </div>
                  <p>
                    Tell our IT consultants what is your plan or your problem
                    they will find the best solution for you.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="bg-[#140c1c] p-5 rounded-md">
                  <div className="flex">
                    <div className="flex gap-4">
                      <div className="custom-bullet"></div>
                      <h5 className="mr-5">Meet with the developers team</h5>
                    </div>
                    <FontAwesomeIcon className="mt-1" icon={faArrowRight} />
                  </div>
                  <p>
                    Tell our IT consultants what is your plan or your problem
                    they will find the best solution for you.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="bg-[#140c1c] p-5 rounded-md">
                  <div className="flex">
                    <div className="flex gap-4">
                      <div className="custom-bullet"></div>
                      <h5 className="mr-5">Meet with the developers team</h5>
                    </div>
                    <FontAwesomeIcon className="mt-1" icon={faArrowRight} />
                  </div>
                  <p>
                    Tell our IT consultants what is your plan or your problem
                    they will find the best solution for you.
                  </p>
                </div>
              </div>
            </div>
            {/* <ul className="flex gap-3">
              <li className="social-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </li>
              <li className="social-link">
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
            </ul> */}
          </div>
          <div className="form-container px-6">
            <h3 className="text-5xl font-extralight text-[#8750f7] mt-8 mb-2">
              {`Let's Talk`}
            </h3>
            <p className="mb-6 font-semibold">Any question? Please contact me.</p>
            <form action="">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-5">
                <textarea
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <div className="mb-8 mt-8">
                <button className="custom-btn rounded-md w-full">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
