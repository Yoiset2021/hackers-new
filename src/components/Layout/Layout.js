import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <h1>Hacker News</h1>
            </div>
            <div>{children}</div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
