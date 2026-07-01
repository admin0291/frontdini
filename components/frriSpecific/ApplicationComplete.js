import React, { useState } from "react";
import { useRouter } from "next/router";

const ApplicationComplete = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    cvFile: null
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      
      if (!validTypes.includes(fileExtension)) {
        setErrors(prev => ({ ...prev, cvFile: "Please upload a PDF or Word document" }));
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, cvFile: "File size must be less than 5MB" }));
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        cvFile: file
      }));
      setErrors(prev => ({ ...prev, cvFile: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.birthday) {
      newErrors.birthday = "Birthday is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowSuccessModal(true);
    }
  };

  const handleDoneClick = () => {
    setShowSuccessModal(false);
    router.push('https://www.nike.com');
  };

  return (
    <>
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 max-w-lg w-full shadow-[0_20px_60px_rgba(255,103,31,0.4)] animate-slide-up">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6 max-sm:hidden">
                <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20 animate-ping"></div>
                <div className="relative w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white animate-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4 uppercase tracking-tight">
                Application Submitted!
              </h3>
              
              <p className="text-gray-700 text-base sm:text-lg mb-2 sm:mb-3 font-medium">
                Thank you for applying to Nike
              </p>
              
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-md">
                Your application has been received successfully. Our recruitment team will review it and get back to you soon.
              </p>
              
              <button
                onClick={handleDoneClick}
                className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-orange-500 active:scale-95 transition-all duration-300 shadow-lg"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes check {
          0% {
            stroke-dasharray: 0, 100;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 100, 0;
            stroke-dashoffset: 0;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-check {
          animation: check 0.6s ease-out 0.2s backwards;
        }
      `}</style>

      <section className="w-full bg-[#0e0e0e] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="black">
                <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.205.93-.168 1.746.112 2.447.373.933 1.168 1.4 2.387 1.4.747 0 1.63-.224 2.648-.672L24 7.8z"/>
              </svg>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase tracking-wide text-white">
              Complete Your Application
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base">
              Please fill in your details to complete your application
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#0e0e0e] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <label htmlFor="firstName" className="block text-white text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg border-2 ${errors.firstName ? 'border-red-500' : 'border-gray-700'} bg-black text-white text-sm placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-200`}
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-white text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg border-2 ${errors.lastName ? 'border-red-500' : 'border-gray-700'} bg-black text-white text-sm placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-200`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="mb-3 sm:mb-4">
              <label htmlFor="email" className="block text-white text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg border-2 ${errors.email ? 'border-red-500' : 'border-gray-700'} bg-black text-white text-sm placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-200`}
                placeholder="john.doe@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mb-3 sm:mb-4">
              <label htmlFor="birthday" className="block text-white text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
                className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg border-2 ${errors.birthday ? 'border-red-500' : 'border-gray-700'} bg-black text-white text-sm placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-200`}
              />
              {errors.birthday && <p className="text-red-500 text-xs mt-1">{errors.birthday}</p>}
            </div>

            <div className="mb-4 sm:mb-6">
              <label htmlFor="cvFile" className="block text-white text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                Upload CV (PDF or Word)
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="cvFile"
                  name="cvFile"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="cvFile"
                  className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg border-2 ${errors.cvFile ? 'border-red-500' : 'border-gray-700'} bg-black text-gray-400 text-sm flex items-center justify-between cursor-pointer hover:border-gray-600 active:border-orange-500 transition-all duration-200`}
                >
                  <span className="truncate">{formData.cvFile ? formData.cvFile.name : 'Choose file...'}</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </label>
              </div>
              {errors.cvFile && <p className="text-red-500 text-xs mt-1">{errors.cvFile}</p>}
              <p className="text-gray-500 text-xs mt-1">Maximum file size: 5MB</p>
            </div>

            <button
              type="submit"
              className="w-full bg-white/80 text-black text-sm sm:text-base font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-white active:scale-[0.98] transition-all duration-200 uppercase tracking-wide"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ApplicationComplete;