
import React, { useState } from "react";
import ybackgroundImage from "./assets/ao.jpg";

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What sets your business security services apart from others?",
      answer:
        "Our business security services stand out due to our teams extensive expertise, advanced technology, and personalized approach to meet your specific needs.",
    },
    {
      question: "How experienced are your security professionals?",
      answer:
        "Our security professionals are highly trained and possess extensive experience in the industry, guaranteeing top-notch expertise and reliability.",
    },
    {
      question:
        "Do you provide armed security services? Are your security professionals highly trained?",
      answer:
        "Yes, we offer armed security services with highly trained professionals who undergo rigorous training to ensure your safety and maintain a secure environment.",
    },
    {
      question:
        "Can you customize security solutions for my unique requirements?",
      answer:
        "Absolutely! We understand that each client has specific security needs. Our experts will work closely with you to develop customized solutions tailored to your business or property.",
    },
    {
      question: "What if I need support outside regular business hours?",
      answer:
        "We provide 24/7 support to address any security concerns you may have, ensuring you have access to assistance and peace of mind at all times.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <div className="text-center my-12">
        <p className="text-lg md:text-xl lg:text-2xl">Asked Questions</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-lg">
          Welcome to our Frequently Asked Questions (FAQ) section, where we
          address common inquiries about our security services:
        </p>
      </div>
      <div className="w-full max-w-4xl">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md mt-2"
          >
            <h2 id={`heading${index}`}>
              <button
                className="flex items-center w-full p-4 text-left border-b border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:outline-none"
                type="button"
                aria-expanded={openIndex === index}
                aria-controls={`collapse${index}`}
                onClick={() => handleToggle(index)}
              >
                <span className="flex-grow">{item.question}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
              aria-labelledby={`heading${index}`}
            >
              <div className="p-4 border-t border-gray-300 bg-gray-50">
                <strong>{item.answer}</strong> It is{" "}
                {openIndex === index ? "shown" : "hidden"} by default. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-28">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Our Prices</h1>
      </div>
      <div
        className="h-[25rem] md:h-[30rem] w-full flex flex-col text-white bg-cover bg-center mt-12 lg:mt-28 px-4 md:px-8 lg:px-16"
        style={{
          backgroundImage: `url(${ybackgroundImage})`,
        }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-16 lg:mt-32 font-bold">
          COMPLIANCE AGENT
        </h1>
        <h1 className="text-lg md:text-xl lg:text-2xl mt-4 font-bold">
          DCJS License #: 11–21113
        </h1>
        <p className="text-sm md:text-md lg:text-lg mt-4 leading-relaxed">
          Navigating complex regulations and ensuring adherence to compliance<br />
          standards is our expertise. Trust us as your dedicated compliance<br />
          agent to safeguard your business and mitigate risks effectively.
        </p>
        <div className="flex justify-center mt-8 lg:mt-12">
          <button className="text-[#447abe] hover:text-white border-2 font-bold py-2 px-10 md:px-16 lg:px-24 rounded-full bg-white hover:bg-[#447abe]">
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
