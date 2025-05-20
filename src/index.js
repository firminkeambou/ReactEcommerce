import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartContextProvider from './components/contexts/cartContext';

//import reportWebVitals from './reportWebVitals';
//  <React.StrictMode><React.StrictMode> // I removed  --StrictMode , because it makes components render twice

const root = ReactDOM.createRoot(document.getElementById('root')); //it is rendered in "/public/index.html"
root.render(
    
    <CartContextProvider>
        <App />
    </CartContextProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
