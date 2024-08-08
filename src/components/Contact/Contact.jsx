// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xblrydpa");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    <div className="py-16">
      <div id="contact" className="container min-h-screen hero mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="">
            <div data-aos="fade-right" data-aos-delay="400">
              <div className="mb-3">
                <h3 className="text-5xl font-extralight contact-title">{`How can I help?`}</h3>
              </div>
              <p className="mb-5">{`I am here to help and answer any question you might have, i look forward to hearing from you 😃`}</p>
            </div>

            {/* Card */}
            <div className="space-y-6 mt-8">
              <div className="card" data-aos="zoom-in" data-aos-delay="500">
                <div className="bg-[#140c1c] p-5 rounded-md">
                  <div className="flex">
                    <div className="flex gap-4">
                      <div className="custom-bullet"></div>
                      <h5 className="mr-5">Reach out via email</h5>
                    </div>
                    <FontAwesomeIcon className="mt-1" icon={faArrowRight} />
                  </div>
                  <p>
                    Send me a detailed email with your project requirements or
                    ideas.
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:amio.das.dip@gmail.com"
                      className="underline text-[#8750f7]"
                    >
                      amio.das.dip@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="card" data-aos="zoom-in" data-aos-delay="600">
                <div className="bg-[#140c1c] p-5 rounded-md">
                  <div className="flex">
                    <div className="flex gap-4">
                      <div className="custom-bullet"></div>
                      <h5 className="mr-5">Fill out the contact form</h5>
                    </div>
                    <FontAwesomeIcon className="mt-1" icon={faArrowRight} />
                  </div>
                  <p>
                    Use the contact form on my portfolio site to leave your
                    details and message. Schedule a time for us to discuss your
                    project in detail.
                  </p>
                </div>
              </div>
              <div className="card" data-aos="zoom-in" data-aos-delay="700">
                <div className="bg-[#140c1c] p-5 rounded-md">
                  <div className="flex">
                    <div className="flex gap-4">
                      <div className="custom-bullet"></div>
                      <h5 className="mr-5">Follow Up</h5>
                    </div>
                    <FontAwesomeIcon className="mt-1" icon={faArrowRight} />
                  </div>
                  <p>
                    {" "}
                    I aim to respond within [Your Response Time, e.g., 24-48
                    hours]. If you haven’t heard back, please feel free to
                    follow up.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="form-container px-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-5xl font-extralight text-[#8750f7] mt-8 mb-2">
              {`Let's Talk`}
            </h3>
            <p className="mb-6 font-semibold">
              Any question? Please contact me.
            </p>
            <form
              onSubmit={handleSubmit}
              // action="https://formspree.io/f/xblrydpa"
              // method="POST"
            >
              <div className="mb-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                  autoComplete="off"
                  required
                />
                <ValidationError
                  prefix="First Name"
                  field="firstName"
                  errors={state.errors}
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  autoComplete="off"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  name="message"
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Type your message"
                  autoComplete="off"
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="mb-8 mt-8">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="custom-btn rounded-md w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
