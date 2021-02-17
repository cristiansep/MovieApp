

import React from 'react';

export const Footer = () => {
    return (
        <footer className="text-gray-600 body-font mt-20 bg-primary">
        <div className="container px-5 py-3 mx-auto flex justify-center sm:flex-row flex-col">
          <p className="text-sm text-white sm:ml-4 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()}
            <a href="https://cristiansep.vercel.app" className="text-white ml-1" rel="noopener noreferrer" target="_blank">cristiansep</a>
          </p>
        </div>
      </footer>
    )
}
