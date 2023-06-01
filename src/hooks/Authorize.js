import React, { createContext, useState } from 'react';
import Login from '../pages/unauthorized/Login';
import { useEffect } from 'react';

const authorizeContext = createContext();

const AuthorizationProvider = props => {
    const [content, setContent] = useState(false);

    function authorize(loggedIn) {
        if (loggedIn) {
            setContent(props.children);
        } else {
            setContent(<Login />);
        }
    }

    useEffect(() => {
        authorize(false);
    }, []);

    return <authorizeContext.Provider value={{ authorize }}>{content}</authorizeContext.Provider>;
};

export default AuthorizationProvider;
