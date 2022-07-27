import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage, ErrorText } from './styles';

const ShowError = ({ error }) => {
    return (
        <ErrorMessage>
            <ErrorText>{error}</ErrorText>
        </ErrorMessage>
    );
};

ShowError.propTypes = {
    error: PropTypes.string.isRequired,
};

export default ShowError;
