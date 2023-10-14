import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";

import './styles.scss'
import './assets/fonts/Ubuntu-Regular.ttf'

import {router} from "./router";
import {Provider} from "react-redux";
import {persistor, store} from "./redux";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>
);