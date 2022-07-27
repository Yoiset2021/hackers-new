import React from 'react';
import { NavLink } from 'react-router-dom';

import { HOME, MY_FAVES } from '../../../../constants/routes';
import { NavTabsContainer, NavTabsWrapper, NavTabsText } from './styles';

const NavTabs = () => {
    const itemsTab = [
        {
            name: 'All',
            path: HOME,
        },
        {
            name: 'My Faves',
            path: MY_FAVES,
        },
    ];

    return (
        <NavTabsContainer>
            {itemsTab.map(({ name, path }) => (
                <NavLink to={path} key={name} activeClassName="activeTab">
                    <NavTabsWrapper>
                        <NavTabsText>{name}</NavTabsText>
                    </NavTabsWrapper>
                </NavLink>
            ))}
        </NavTabsContainer>
    );
};

export default NavTabs;
