/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Vitest configuration options
    globals: true, // Make sure globals like `expect` are available
    environment: 'jsdom', // Ensure jsdom is being used for testing React components/
  },
});
