import { useState } from "react";
import axios from "axios";
import Questionnaire from "./Questionnaire"; // Importing the Questionnaire component

const Signup = () => {
  const [step, setStep] = useState(1); // To handle steps for T&C
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    businessAddress: "",
    postalCode: "",
    agreeToTerms: false,
  });
  const [isSignupVisible, setIsSignupVisible] = useState(true); // To handle signup popup visibility
  const [isQuestionnaireVisible, setIsQuestionnaireVisible] = useState(false); // To handle questionnaire visibility

  const handleNext = () => {
    if (step === 1) {
      setStep(2); // Move to Terms and Conditions
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.agreeToTerms) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/signup",
          formData
        );
        console.log(response.data);
        // Close signup and open questionnaire
        setIsSignupVisible(false); // Hide signup popup
        setIsQuestionnaireVisible(true); // Show questionnaire popup
      } catch (err) {
        console.error("Signup Error:", err.response.data);
      }
    } else {
      alert("Please agree to the Terms and Conditions");
    }
  };


  return (
    <>
      {isSignupVisible && (
        <div className="flex justify-center items-center h-[400px] min-h-[600px] bg-gradient-to-br from-blue-100 via-indigo-100 to-gray-200 py-10">
          <div className="bg-white shadow-lg rounded-lg h-[600px] p-8 w-full max-w-lg border border-indigo-300 pt-2">
            <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
              Create Your Account
            </h1>

            {step === 1 && (
              <form className="space-y-1">
                <div>
                  <label className="block text-base font-semibold text-indigo-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-indigo-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-indigo-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-base font-semibold text-indigo-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-semibold text-indigo-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-indigo-700 mb-2">
                    Business Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your business address"
                    value={formData.businessAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        businessAddress: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-indigo-700 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter postal code"
                    value={formData.postalCode}
                    onChange={(e) =>
                      setFormData({ ...formData, postalCode: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-indigo-600 mt-2 text-white py-3 px-4 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300"
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-6 text-indigo-700">
                  Terms and Conditions
                </h2>
                <p className="text-sm text-gray-600 mb-6 h-56 overflow-y-auto border border-gray-300 p-4 rounded-md">
                  Terms and Conditions for SME Portal <br />
                  Effective Date: 17/10/2024 <br />
                  <br />
                  Welcome to Project Sahyog! By accessing and using this
                  platform, you agree to comply with and be bound by the
                  following Terms and Conditions. Please read them carefully. If
                  you do not agree with these Terms, you must not use this
                  website.
                  <br />
                  1. Acceptance of Terms By creating an account, accessing, or
                  using any part of the portal, you agree to abide by these
                  Terms and Conditions, as well as our Privacy Policy. We may
                  update or amend these Terms from time to time, and your
                  continued use of the site following any changes signifies your
                  acceptance of those changes. <br />
                  2. User Eligibility To use our portal, you must: Be at least
                  18 years old and legally capable of entering into binding
                  contracts. Be a registered business entity or represent a
                  valid SME. Provide accurate and truthful information during
                  signup and profile creation. <br />
                  3. User Account and Security You are responsible for
                  maintaining the confidentiality of your account information,
                  including your password. You agree to: Use a secure password
                  and keep your login credentials confidential. Notify us
                  immediately if you suspect any unauthorized access or security
                  breach involving your account. We reserve the right to suspend
                  or terminate your account if we suspect any fraudulent
                  activity, unauthorized use, or breach of these Terms. <br />
                  4. Use of the Portal You agree to use the portal for
                  legitimate business purposes, including accessing resources,
                  networking, and collaborating with other SMEs. You are
                  prohibited from: Uploading or sharing false, misleading, or
                  fraudulent information. Using the platform for illegal
                  activities or to infringe the intellectual property of others.
                  Attempting to hack, reverse-engineer, or exploit any part of
                  the platform. We reserve the right to monitor and review user
                  activities to ensure compliance with these Terms.
                  <br />
                  5. Business Information and Responsibility The information you
                  provide, such as business name, address, contact details, and
                  any business-related information, must be accurate, current,
                  and complete. You are solely responsible for: Keeping your
                  profile and business details updated. Ensuring the legal
                  compliance of your business operations. We are not liable for
                  any inaccuracies or errors in the information you provide, nor
                  for any consequences resulting from the misrepresentation of
                  your business.
                  <br />
                  6. Intellectual Property All content, trademarks, and logos on
                  the portal are the property of [Portal Name] or its licensors
                  and are protected by intellectual property laws. You may not
                  copy, distribute, modify, or create derivative works from any
                  of the content without prior written consent. However, any
                  content you upload, including business details, feedback, or
                  resources, remains your intellectual property, and you grant
                  us a non-exclusive, royalty-free license to use it for the
                  purposes of operating the platform. <br />
                  7. Privacy Policy Your privacy is important to us. Please
                  review our Privacy Policy to understand how we collect, use,
                  and safeguard your information. <br />
                  8. Termination of Account We reserve the right to suspend or
                  terminate your account without notice if we determine that you
                  have violated these Terms. Upon termination: You will no
                  longer have access to your account or the portal. Any
                  outstanding obligations, such as payments, will remain your
                  responsibility. You may also terminate your account at any
                  time by contacting customer support. <br />
                  9. Limitation of Liability [Portal Name] is not responsible
                  for any direct, indirect, incidental, or consequential damages
                  that arise from: Your use of the portal or inability to access
                  it. Any content, products, or services obtained through the
                  portal. The conduct of other users or third parties on the
                  platform. We do not guarantee the accuracy, completeness, or
                  timeliness of the information provided on the portal. <br />
                  10. Indemnification You agree to indemnify and hold [Portal
                  Name] and its affiliates, officers, directors, employees, and
                  agents harmless from any claims, damages, liabilities, costs,
                  or expenses (including legal fees) arising out of your: Use of
                  the platform. Violation of these Terms. Infringement on the
                  rights of any third party. <br />
                  11. Modifications to the Terms We may modify these Terms from
                  time to time by posting an updated version on the platform.
                  You are encouraged to review the Terms periodically. Continued
                  use of the platform following any changes constitutes your
                  acceptance of the revised Terms. <br />
                  12. Governing Law These Terms and any disputes arising from
                  your use of the portal will be governed by and construed in
                  accordance with the laws of [Jurisdiction], without regard to
                  its conflict of law principles. <br />
                  13. Contact Information
                  <br />
                  If you have any questions or concerns regarding these Terms,
                  please contact us at: <br />
                  <br />
                  Email: [support@yourwebsite.com] <br />
                  Address: [Business Address] <br />
                  By creating an account, you confirm that you have read,
                  understood, and agreed to these Terms and Conditions.
                  <br />
                  <br />
                  <br />
                  By creating an account, you confirm that you have read,
                  understood, and agreed to these Terms and Conditions.
                </p>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        agreeToTerms: !formData.agreeToTerms,
                      })
                    }
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-base text-gray-700">
                    I agree to the Terms and Conditions
                  </span>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md shadow-lg hover:bg-green-700 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {isQuestionnaireVisible && (
        <div className="fixed inset-0 z-50 bg-white flex justify-center items-center">
          <Questionnaire /> {/* Full-screen Questionnaire component */}
        </div>
      )}
    </>
  );
};

export default Signup;