import React, { useState } from "react";
import livechat from "../assets/livechat.png";
import businessDirectory from "../assets/businessDirectory.png";
import marketPlace from "../assets/marketPlace.png";
import Signup from "./Signup";

const About = () => {
  // State to track the current active section
  const [activeSection, setActiveSection] = useState("Feature");
  const [activeMpSection, setActiveMpSection] = useState("Feature");
  const [activeBdSection, setActiveBdSection] = useState("Feature");
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupClick = () => {
    setIsSignupVisible(true);
  };

  // Function to render content based on active section
  const renderContent = (activeSection) => {
    switch (activeSection) {
      case "Feature":
        return {
          title: "Get suggested with the best scheme",
          description:
            "Answer a couple of questions and get recommended with a scheme. Talk with our AI chatbot to gain more info on the scheme or see other related ones !",
        };
      case "Implementation":
        return {
          title: "Implementation of live chat systems",
          description:
            "Our live chat system is built on a scalable architecture, ensuring efficient communication between users and personnel. It is secure and supports real-time messaging.",
        };
      case "Analysis":
        return {
          title: "Analysis of chat interactions",
          description:
            "We provide detailed analysis of chat interactions, allowing businesses to gain insights into customer needs, response times, and overall satisfaction.",
        };
      default:
        return {
          title: "Chat instantly with our personnel",
          description:
            "Lorem ipsum odor amet, consectetur adipiscing elit. Mauris maximus in nibh ligula nisl curabitur. Dui fermentum fames aliquam scelerisque lobortis class amet.",
        };
    }
  };

  // Content for each section
  const content = renderContent(activeSection);
  const mpContent = renderContent(activeMpSection);
  const bdContent = renderContent(activeBdSection);

  return (
    <>
      {/* Business Directory Section */}
      <section className="bg-primary text-white py-16 px-4 flex justify-center">
        <div className="px-7 py-3">
          <h1 className="text-6xl font-bold mb-4 text-start">
            Business Directory
          </h1>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mb-8">
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeBdSection === "Feature" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveBdSection("Feature")}
            >
              Feature
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeBdSection === "Implementation" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveBdSection("Implementation")}
            >
              Implementation
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeBdSection === "Analysis" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveBdSection("Analysis")}
            >
              Analysis
            </button>
          </div>

          {/* Content Section */}
          <div className="livechat-background bg-[#030014] w-[100%] py-3 px-6 border border-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 flex flex-col items-start">
                <h3 className="text-4xl font-semibold mb-4 text-start w-full font-outfit">
                  {bdContent.title}
                </h3>
                <p className="mb-6 text-start w-full">
                  {bdContent.description}
                </p>
                <div className="w-full flex justify-center">
                  <button
                    onClick={handleSignupClick}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
              {isSignupVisible && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                      className="fixed inset-0 transition-opacity"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span
                      className="hidden sm:inline-block sm:align-middle sm:h-screen"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <Signup />
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setIsSignupVisible(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="md:w-1/2">
                <img
                  src={businessDirectory}
                  alt="Business Directory Illustration"
                  className="w-[120%] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Place Section */}
      <section className="bg-primary text-white py-16 px-4 flex justify-center">
        <div className="px-7 py-3">
          <h1 className="text-6xl font-bold mb-4 text-start">Market Place</h1>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mb-8">
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeMpSection === "Feature" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveMpSection("Feature")}
            >
              Feature
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeMpSection === "Implementation" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveMpSection("Implementation")}
            >
              Implementation
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeMpSection === "Analysis" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveMpSection("Analysis")}
            >
              Analysis
            </button>
          </div>

          {/* Content Section */}
          <div className="livechat-background bg-[#030014] w-[100%] py-3 px-6 border border-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2">
                <img
                  src={marketPlace}
                  alt="Market Place Illustration"
                  className="w-[150%] h-auto"
                />
              </div>
              <div className="md:w-1/2 flex flex-col items-start">
                <h3 className="text-4xl font-semibold mb-4 text-start w-full font-outfit">
                  {mpContent.title}
                </h3>
                <p className="mb-6 text-start w-full">
                  {mpContent.description}
                </p>
                <div className="w-full flex justify-center">
                  <button
                    onClick={handleSignupClick}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
              {isSignupVisible && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                      className="fixed inset-0 transition-opacity"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span
                      className="hidden sm:inline-block sm:align-middle sm:h-screen"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <Signup />
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setIsSignupVisible(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Section */}
      <section className="bg-primary text-white py-16 px-4 flex justify-center">
        <div className="px-7 py-3">
          <h1 className="text-6xl font-bold mb-4 text-start">Live Chat</h1>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mb-8">
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeSection === "Feature" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveSection("Feature")}
            >
              Feature
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeSection === "Implementation" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveSection("Implementation")}
            >
              Implementation
            </button>
            <button
              className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
                activeSection === "Analysis" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActiveSection("Analysis")}
            >
              Analysis
            </button>
          </div>

          {/* Content Section */}
          <div className="livechat-background bg-[#030014] w-[100%] py-3 px-6 border border-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 flex flex-col items-start">
                <h3 className="text-4xl font-semibold mb-4 text-start w-full font-outfit">
                  {content.title}
                </h3>
                <p className="mb-6 text-start w-full">{content.description}</p>
                <div className="w-full flex justify-center">
                  <button
                    onClick={handleSignupClick}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
              {isSignupVisible && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                      className="fixed inset-0 transition-opacity"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span
                      className="hidden sm:inline-block sm:align-middle sm:h-screen"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <Signup />
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setIsSignupVisible(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="md:w-1/2">
                <img
                  src={livechat}
                  alt="Live Chat Illustration"
                  className="w-[60%] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-primary relative flex items-center justify-center w-full">
        <div className="flex-grow border-t border-white"></div>
        <div className="text-center text-3xl font-bold px-4 w-[50vw] animate-blink text-white">
          TESTIMONIALS
        </div>
        <div className="flex-grow border-t border-white"></div>
      </div>
    </>
  );
};

export default About;
