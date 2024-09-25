// File: Loader.tsx
// A simple loading indicator component.
//
import React from 'react';
import ModalBase from '../react/ModalBase';
import Spinner from '../react/Spinner'

const Loader = () => {
  return (
    <ModalBase>
      <div className="space-y-20 flex flex-col items-center justify-center w-full min-w-md md:w-[300px] h-full">
        <Spinner />
        <p className="text-gray-400 m-4 text-2xl font-semibold">Logging in</p>
      </div>
    </ModalBase>
  );
};

export default Loader;

