import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { AllNews, MyFaveNews } from './pages';
import { HOME, MY_FAVES } from './constants/routes';

const App = () => {
    return (
        <BrowserRouter>
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
