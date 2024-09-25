import { atom } from 'nanostores';

// Create a nanostore that syncs with sessionStorage
export const sessionIsActive = atom(sessionStorage.getItem('authTokenCoins') !== null);

export function setSessionToken(token: string) {
  if (token) {
    sessionStorage.setItem('authTokenCoins', token);
    sessionIsActive.set(true);
  } else {
    sessionStorage.removeItem('authTokenCoins');
    sessionIsActive.set(false);
  }
}

// Function to clear the session
export function clearSession() {
  sessionStorage.clear();
  localStorage.clear();
  sessionIsActive.set(false);
}
