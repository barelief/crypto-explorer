// BackButton.tsx
import React from 'react';
import { sessionIsActive } from './../../stores/sessionStore';
import { useStore } from '@nanostores/react';

interface BackButtonProps {
  url: string;
  activeLabel: string;
  inactiveLabel: string;
}

const BackButton = React.memo(({
  url,
  activeLabel = 'Back',
  inactiveLabel = 'Sign In',
}: BackButtonProps) => {

  const isSessionActive = useStore(sessionIsActive);

  return (
    <a
      href={url}
      className="bg-slate-100 border border-black text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
    >
      {isSessionActive ? activeLabel : inactiveLabel}
    </a>
  );
});

export default BackButton;
