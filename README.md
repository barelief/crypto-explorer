# Crypto Rate Explorer Web App

## Project Overview

This project is a Crypto Rates Explorer web application that allows users to log in and view a list of cryptocurrency rates. The cryptocurrency list can be sorted by name or price. The app is designed to be responsive, working seamlessly on modern browsers, mobile devices, and tablets. The goal was to create a production-ready application while maintaining simplicity and scalability.

Demo → <https://blon.lt/explorer>

![Demo](https://blon.lt/explorer/images/demo.png)

## Features

- **User Authentication**: Login implementation using simple API.
- **Crypto List Display**: Fetch and display a list of cryptocurrencies, with sorting functionality by name and price.
- **State management**: use `nanostores` with session local storage to persist users session and sorting actions
- **Responsive Design**: Works well on desktops, tablets, and mobile devices.
- **Accessibility (a11y)**: The app includes accessibility improvements, ensuring better support for screen readers
- **Unit Tests**: The app includes unit tests for critical components, ensuring stability and preventing regressions.
- **Production-Ready**: The application is structured and coded following best practices for scalability and maintainability.

## Project Structure

```
├── 📂 public                    # Static assets folder, accessible publicly, e.g., favicon, images, etc.
├── 📂 src                       # Source directory containing all the application code.
    ├── 📂 assets                # Folder for static assets like images and fonts.
    ├── 📂 components            # Reusable UI components split into Astro and React categories.
    │   └── 📂 react            # React components
    │   ├── 📂 layouts           # Layouts for the application, defining consistent structure across pages.
    ├── 📂 pages                 # Pages of the app, each .astro, .tsx, .md etc. file represents a route.
    ├── 📂 stores                # Global state management using Nano Stores, handling session
    └── 📂 styles                # Custom Tailwind CSS configurations.
```

### Key Files

📂 components/react:

- **`App.tsx`**: The main React component that initializes the application.
- **`CryptoListPage.tsx`**: Displays the list of cryptocurrencies with sorting functionality.
- **`NavbarHandler.tsx`**: Manages the navigation bar state and interactions.
- **`ModalBase.tsx`**: A reusable modal component used across the app.
- **`Loader.tsx` & `Spinner.tsx`**: Components for showing loading states.
- **`sessionStore.ts`**: Manages session state using Nano Stores.

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

### Building for Production

To build the project for production, run:

```sh
npm run build
```

### Previewing the Production Build

To preview the production build locally:

```sh
npm run preview
```

## Improvements and Future Enhancements

While the current implementation meets the project's requirements, several improvements can be made:

- **Enhanced Error Handling**: Implement more robust error handling across the app, especially in network requests.
- **Unit and Integration Tests**: Add testing to ensure the reliability and stability of components.
- **Additional Test Coverage**: While unit tests have been added, more integration and end-to-end tests can be implemented to further ensure reliability.
- **Advanced Sorting and Filtering**: Add multi-criteria sorting and filtering based on additional parameters.
- **Accessibility**: Improve accessibility to ensure the app is usable by people with disabilities.

## Dependencies

Major dependencies:

- **[Astro](https://astro.build/)**: For building the static site.
- **[React](https://reactjs.org/)**: As the main UI library.
- **[Tailwind CSS](https://tailwindcss.com/)**: For styling.
- **[Nano Stores](https://github.com/nanostores/nanostores)**: For state management in React components.

Refer to the `package.json` for a full list of dependencies.

## Author

Bartosh Polonski <https://github.com/barelief>
