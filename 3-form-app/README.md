# Form Website

## Description
This web application showcases a fully functional form with diverse input fields. The form includes robust validation and displays the entered information on a dedicated review page. Built with React for the front-end, it leverages Redux for efficient state handling and React Router for seamless navigation between pages.

### Key Features

- **Validation** : Comprehensive input validation for multiple field types.
- **Redux** : State management implemented using Redux.
- **Navigaton** : Smooth page transitions powered by React Router.
- **Responsive** : Mobile-friendly design using responsive media queries.
- **Animations** : Engaging animations to enhance user interaction and experience.

## Program Structure

The application's structure is organized as follows:
```sh
/3-form-app
├── /public
│   ├── texture.svg
│   └── ...
├── /src
│   ├── /components
│   │   └── FormField.jsx
│   ├── /features
│   │   └── formSlice.js
│   ├── /pages
│   │   ├── FormPage.jsx
│   │   └── ReviewPage.jsx
│   ├── App.css
│   ├── App.js
│   ├── ...   
├── package.json
└── README.md
```

### Key Directories:
- **/public:** Stores static assets that can be accessed publicly.
- **/src:** Contains all reusable components, features, and pages.
- **/src/components:** Contains all reusable components used across the application.
- **/src/features:** Feature for website.
- **/src/pages:** Different pages on the website.

## Dependencies

This project relies on the following libraries and tools:

| **Dependency**                | **Description**                                                       | **Version**   |
|--------------------------------|-----------------------------------------------------------------------|---------------|
| **@reduxjs/toolkit**           | Efficient state management for modern Redux applications.             | ^2.3.0        |
| **@testing-library/jest-dom**  | Custom Jest matchers for DOM node testing.                            | ^5.17.0       |
| **@testing-library/react**     | Tools for testing React components.                                   | ^13.4.0       |
| **@testing-library/user-event**| Utilities for simulating user interactions in tests.                  | ^13.5.0       |
| **react**                      | JavaScript library for building user interfaces.                      | ^18.3.1       |
| **react-dom**                  | DOM rendering for React applications.                                 | ^18.3.1       |
| **react-redux**                | Official bindings for using Redux with React.                         | ^9.1.2        |
| **react-router-dom**           | Declarative routing for React web applications.                       | ^6.28.0       |
| **react-scripts**              | Scripts and configuration for building and running a React app.       | 5.0.1         |
| **web-vitals**                 | Tools for measuring essential web performance metrics.                | ^2.1.4        |

## Getting Started

Follow these steps to get the website up and running on your local machine:

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)
- **npm**: Included with Node.js [More info](https://www.npmjs.com/get-npm)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/farrelathalla/Technical-Case-Study-Purple-Fox.git
   cd 3-form-app
   
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Website

To start the development server, run:
   ```bash
   npm start
   ```
<p>The application will be available at <b>http://localhost:3000.</b></p>

### Building for Production

To build the application for production, run:

   ```bash
   npm run build
   ```

### Run test

Run the tests defined in the project:

   ```bash
   npm test
   ```
