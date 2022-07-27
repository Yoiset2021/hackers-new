import React from 'react';
import PropTypes from 'prop-types';

import { NavTabs } from './components';
import { Container, Title, TitleText } from './styles';

const Layout = ({ children }) => {
    return (
        <div>
            <Title>
                <TitleText>HACKER NEWS</TitleText>
            </Title>
            <NavTabs />
            <Container>{children}</Container>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
