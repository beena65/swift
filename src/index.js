import React from "react";
import {createRoot} from "react-dom/client";

import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
