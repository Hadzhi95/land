import App from './App';

import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "react-phone-number-input/style.css";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}