import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { AllNews, MyFaveNews } from './pages';
import { HOME, MY_FAVES } from './constants/routes';
import GlobalStyle from './GlobalStyle';
import './global.css';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Layout>
                <Routes>
                    <Route path={HOME} element={<AllNews />} />
                    <Route path={`/${MY_FAVES}`} element={<MyFaveNews />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
