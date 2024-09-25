// File: NavbarHandler.tsx
// Handles the display and functionality of the navigation bar, 
// including session-based visibility and logout functionality.

import { useStore } from '@nanostores/react';
import { sessionIsActive, clearSession } from './../../stores/sessionStore';

const NavbarHandler = () => {
  const isSessionActive = useStore(sessionIsActive);

  const handleLogOut = () => {
    // Clear session, effectively logging the user out (using the nanostore function)
    clearSession();
  };

  if (!isSessionActive) {
    return null; // Hide the navbar when the session is inactive  
  }

  return (
    <header className="sticky top-0 z-10">
      <nav>
        <div
          className="flex justify-between items-center bg-white w-full shadow-lg p-5 lg:px-40">
          <div className="">
            <a href={`${import.meta.env.BASE_URL}`} className="h-10"><img src={`${import.meta.env.BASE_URL}/favicon.svg`} className="h-8" /></a>
          </div>
          <a
            onClick={handleLogOut}
            className="cursor-pointer rounded-full text-xs font-semibold bg-white border border-gray-300 py-2 px-8 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#000000" fillRule="evenodd" d="M3 5c0-1.1.9-2 2-2h8v2H5v14h8v2H5c-1.1 0-2-.9-2-2zm14.176 6L14.64 8.464l1.414-1.414l4.95 4.95l-4.95 4.95l-1.414-1.414L17.176 13H10.59v-2z"></path></svg>


          </a>
        </div>

      </nav>
    </header>
  )
};

export default NavbarHandler;

