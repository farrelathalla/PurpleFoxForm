import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Import Provider
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import formReducer from './features/formSlice'; // Import your formSlice

// Create the Redux store
const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap App with Provider and pass the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Performance logging (optional)
reportWebVitals();
