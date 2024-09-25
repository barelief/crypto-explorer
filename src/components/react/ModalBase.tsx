// File: ModalBase.tsx
// A reusable container component that provides a consistent structure and styling for dfferent dialogs.
import React from 'react'


const ModalBase = ({ children }: any) => {

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mx-4 w-full md:w-auto h-[490px] md:my-auto mt-20">
      <div className="text-center mb-6">
        {/* Centralized logo */}
        <div><img alt="BLON lab header logo" src={`${import.meta.env.BASE_URL}/favicon.svg`} className="mx-auto" /></div>
      </div >
      {children}
    </div >
  )
};

export default ModalBase;
