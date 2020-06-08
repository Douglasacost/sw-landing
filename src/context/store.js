import React, { createContext, useReducer, useState, useEffect } from 'react';
import useJsonApi from '../utils/useJsonApi';

const initialState = {
    comments: [],
    isLoading: false,
    haveErrors: false
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_IS_LOADING':
                return {
                    ...state,
                    isLoading: action.payload
                };
            case 'SET_HAVE_ERRORS':
                return {
                    ...state,
                    haveErrors: action.payload
                };

            case 'UPDATE_POSTS':
                return {
                    ...state,
                    comments: [
                        ...action.payload
                    ]
                };
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }