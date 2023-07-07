'use client';

import { Provider } from "react-redux";
import { store } from './store';

export const Providers = ({ children }) => (
    <Provider store={store} >
        {children}
    </Provider>
)
