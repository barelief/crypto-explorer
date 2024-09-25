## Changelog

### 004 - 2024-09-04

#### Added

- Accessibility improvements (a11y) to login form elements and error handling.
- Unit tests for `LoginPage.tsx` and redirection logic based on session token.

### 003 - 2024-09-04

#### Added

- Implemented sort direction functionality in `CryptoListPage.tsx`. Users can now sort the items list by both name and distance in either ascending or descending order. Sorting preference is persisted in localStorage, meaning it will be applied next time the browser or session is restarted

### 002 - 2024-09-03

#### Fixed

- Removed unused variables and imports across the codebase, cleaning up unnecessary code and eliminating warnings. 
- Refactored `NavbarHandler.tsx` to be managed under `<Router>` in `App.tsx`, which resolves the flashing page bug. This also includes:
  - Replacing static `layout.astro` with a reactive React component for the `<nav>` and `<header>` sections.
  - Switching from standard `<a>` tags to React Router `<Link>` components, ensuring smoother navigation without full page reloads. 

### 001 - 2024-09-03

**Initial Release**

- Basic login functionality implemented.
- Items list display with sorting by name and distance.
- Responsive design for mobile, tablet, and desktop.
- Core UI components set up (e.g., login, item list, navbar, loader, modal).
- Initial session management using Nano Stores.

**Planned Improvements:**

- Enhanced error handling.
- UI/UX refinements.
- Performance optimizations.
- Adding tests and validation.
- Advanced sorting and filtering options.

For more details, please refer to the [README](./README.md).
