import React from 'react';
import { Box, Spinner } from 'grommet';
import PropTypes from 'prop-types';

export const Loading = ({ color, ...res }) => {
    return (
        <Box {...res} width="100%" height="100vh" flex justify="center" align="center">
            <Spinner size="large" message="Loading..." color={color} />
        </Box>
    );
};
Loading.defaultProps = {
    color: '',
};
Loading.propTypes = {
    color: PropTypes.string,
};

export default Loading;
