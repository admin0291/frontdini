import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-white py-8 sm:py-12 md:py-16" style={{ fontFamily: 'var(--body-regular)' }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            <div className="border-t border-gray-600 mb-6 sm:mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
                
                <div className="md:col-span-3">
                    <div className="text-white mb-8">
                        <svg width="60" height="22" viewBox="0 0 60 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.6197 12.0791C14.9991 12.4982 13.5226 12.7059 12.2315 12.7059C10.6308 12.7059 9.32454 12.3808 8.41007 11.7306C3.77777 8.45792 8.01521 1.5177 8.49485 0.746499C6.45517 2.91803 4.36158 5.1907 2.71735 7.66806C-0.0539083 11.8997 -0.761864 15.9195 0.853898 18.4119C2.09903 20.3414 4.12539 21.3125 6.91422 21.3125C9.38873 21.3125 12.4664 20.5467 16.1182 19.0212L60 0.703755L59.9982 0.6875L16.6197 12.0791Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                
                <div className="md:col-span-9">
                    <nav className="mb-6 sm:mb-8">
                        <ul className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 list-none p-0 text-sm sm:text-base md:text-lg">
                            <li>
                                <a href="#form" className="text-white no-underline hover:text-gray-400 cursor-pointer transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#form" className="text-white no-underline hover:text-gray-400 cursor-pointer transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="#form" className="text-white no-underline hover:text-gray-400 cursor-pointer transition-colors">Contact</a>
                            </li>
                            <li>
                                <a href="#form" className="text-white no-underline hover:text-gray-400 cursor-pointer transition-colors">Talent Community</a>
                            </li>
                            <li>
                                <a href="#form" className="text-white no-underline hover:text-gray-400 cursor-pointer transition-colors">Terms</a>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <a href="#form" aria-label="x" className="text-white bg-transparent border border-gray-600 hover:border-gray-400 cursor-pointer rounded-full h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center transition-colors">
                            <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-c2rigk" aria-hidden="true">
                                    <path d="M16.6 6h2.2L14 11.5l5.7 7.5h-4.4l-3.5-4.5-4 4.5H5.6l5.2-5.9L5.4 6H10l3.1 4.2L16.7 6zm-.7 11.7h1.2L9.2 7.3H7.9z" fill="currentColor"></path>
                                </svg>
                        </a>
                        <a href="#form" aria-label="linkedin" className=" text-white bg-transparent border border-gray-600 hover:border-gray-400 cursor-pointer rounded-full h-8 w-8 flex items-center justify-center transition-colors">
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-c2rigk" aria-hidden="true">
                                    <path d="M4.5 5.712c0-.483.169-.881.507-1.195.338-.314.777-.47 1.317-.47.531 0 .96.154 1.289.463.338.318.507.734.507 1.245 0 .463-.164.85-.493 1.158-.337.319-.781.478-1.332.478h-.014c-.531 0-.96-.159-1.289-.478-.328-.318-.492-.719-.492-1.201Zm.188 12.669V8.709h3.215v9.672H4.688Zm4.995 0h3.215v-5.4c0-.339.038-.6.116-.783a2.1 2.1 0 0 1 .615-.832c.275-.227.62-.34 1.035-.34 1.081 0 1.622.728 1.622 2.186v5.169H19.5v-5.546c0-1.428-.338-2.512-1.014-3.25-.675-.739-1.568-1.108-2.678-1.108-1.245 0-2.215.536-2.91 1.607v.03h-.015l.015-.03V8.71H9.683c.02.309.03 1.27.03 2.881 0 1.612-.01 3.876-.03 6.79Z" fill="currentColor"></path>
                                </svg>
                        </a>
                        <a href="#form" aria-label="instagram" className="text-white bg-transparent border border-gray-600 hover:border-gray-400 cursor-pointer rounded-full h-8 w-8 flex items-center justify-center transition-colors">
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-c2rigk" aria-hidden="true">
                                    <path d="M12 4c2.173 0 2.445.01 3.298.048.852.039 1.433.174 1.942.372.526.204.973.478 1.417.923.445.444.719.89.923 1.417.198.509.333 1.09.372 1.942C19.99 9.555 20 9.827 20 12s-.01 2.445-.048 3.298c-.039.852-.174 1.433-.372 1.942a3.922 3.922 0 0 1-.923 1.417c-.445.445-.89.719-1.417.923-.509.198-1.09.333-1.942.372-.853.039-1.125.048-3.298.048s-2.445-.01-3.298-.048c-.852-.039-1.433-.174-1.942-.372a3.922 3.922 0 0 1-1.417-.923 3.921 3.921 0 0 1-.923-1.417c-.198-.509-.333-1.09-.372-1.942C4.01 14.445 4 14.173 4 12s.01-2.445.048-3.298c.039-.852.174-1.433.372-1.942.204-.526.478-.973.923-1.417.444-.445.89-.719 1.417-.923.509-.198 1.09-.333 1.942-.372C9.555 4.01 9.827 4 12 4Zm0 1.441c-2.136 0-2.39.009-3.233.047-.78.036-1.203.166-1.485.276-.374.145-.64.318-.92.598-.28.28-.453.546-.598.92-.11.282-.24.705-.276 1.485-.038.844-.047 1.097-.047 3.233s.009 2.39.047 3.233c.036.78.166 1.203.276 1.485.145.374.318.64.598.92.28.28.546.453.92.598.282.11.705.24 1.485.276.844.038 1.097.047 3.233.047s2.39-.009 3.233-.047c.78-.036 1.203-.166 1.485-.276.374-.145.64-.318.92-.598.28-.28.453-.546.598-.92.11-.282.24-.705.276-1.485.038-.844.047-1.097.047-3.233s-.009-2.39-.047-3.233c-.036-.78-.166-1.203-.276-1.485a2.479 2.479 0 0 0-.598-.92 2.478 2.478 0 0 0-.92-.598c-.282-.11-.705-.24-1.485-.276-.844-.038-1.097-.047-3.233-.047Zm.002 9.154a2.597 2.597 0 1 0 0-5.195 2.597 2.597 0 0 0 0 5.195Zm0-6.599a4.001 4.001 0 1 1 0 8.003 4.001 4.001 0 0 1 0-8.003Zm5.002 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor"></path>
                                </svg>
                        </a>
                        <a href="#form" aria-label="youtube" className="text-white bg-transparent border border-gray-600 hover:border-gray-400 cursor-pointer rounded-full h-8 w-8 flex items-center justify-center transition-colors">
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-c2rigk" aria-hidden="true">
                                    <path d="M20.624 7.874c-.207-.738-.817-1.319-1.592-1.516C17.63 6 12 6 12 6s-5.629 0-7.032.358c-.775.197-1.385.778-1.592 1.516C3 9.21 3 12 3 12s0 2.79.376 4.126c.207.738.817 1.319 1.592 1.516C6.37 18 12 18 12 18s5.629 0 7.032-.358c.775-.197 1.385-.778 1.592-1.516C21 14.79 21 12 21 12s0-2.79-.376-4.126ZM10 9l6 3-6 3V9Z" fill="currentColor"></path>
                                </svg>
                        </a>
                    </div>
                    
                    <div className="mb-6 sm:mb-8">
                        <a className="text-white text-sm sm:text-base underline cursor-pointer hover:text-gray-400 transition-colors inline-block">
                            Nike Applicant Privacy Policy
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm md:text-base text-gray-300">
                        <div>
                            <p className="mb-4 leading-relaxed">
                                We offer a number of accommodations to complete our interview process including screen readers, sign language interpreters, accessible and single location for in-person interviews, closed captioning, and other reasonable modifications as needed.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 leading-relaxed">
                                If you discover, as you navigate our application process, that you need assistance or an accommodation due to a disability, please contact us at +1 503-671-4156 and include your full name, best way to reach you, and the accommodation you request to assist with the application process.
                            </p>
                            <p className="leading-relaxed">
                                For more information, please refer to{' '}
                                <a className="underline cursor-pointer hover:text-gray-400 transition-colors">Equal Employment Opportunity is The Law.</a>
                            </p>
                        </div>
                    </div>
                    
                    <div className="text-xs text-gray-400">
                        <p className="mb-0">
                            © <span id="copyright">2025</span> Nike, Inc. All Rights Reserved
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </footer>
  );
};

export default Footer;