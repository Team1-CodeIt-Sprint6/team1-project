import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex h-40 justify-center bg-kv-primary-blue p-4 text-white">
      <div className="mx-10 mt-6 flex h-[62px] w-[300px] flex-wrap items-center justify-center pc:h-5 pc:w-[1200px] pc:flex-row pc:justify-between tablet:mx-[110px] tablet:h-5 tablet:w-[1200px] tablet:flex-row tablet:justify-between">
        <span className="mr-3 font-sans text-base font-normal">
          @codeit - 2023
        </span>
        <div className="flex gap-[30px]">
          <a className="font-sans text-base font-normal hover:text-kv-gray-300">
            Privacy Policy
          </a>
          <a className="font-sans text-base font-normal hover:text-kv-gray-300">
            FAQ
          </a>
        </div>
        <div className="flex gap-3">
          <a href="https://facebook.com" className="hover:text-gray-300">
            <img
              src="/assets/icons/icon-facebook.svg"
              alt="Facebook"
              className="h-5 w-5"
            />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-300">
            <img
              src="/assets/icons/icon-twitter.svg"
              alt="Twitter"
              className="h-5 w-5"
            />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300">
            <img
              src="/assets/icons/icon-instagram.svg"
              alt="Instagram"
              className="h-5 w-5"
            />
          </a>
          <a href="https://youtube.com" className="hover:text-gray-300">
            <img
              src="/assets/icons/icon-youtube.svg"
              alt="YouTube"
              className="h-5 w-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
