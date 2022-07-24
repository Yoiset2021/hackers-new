import { useCallback } from 'react';
import axios from 'axios';

import axiosInstance from './helpers/axiosInstance';

const useAxios = ({ url, method }) => {
    const getResponse = useCallback(
        async ({ params }) => {
            const response = await axios.create({
                url: url,
                method,
                params,
            });
            return response;
        },
        [method, url],
    );
    return { getResponse, axiosInstance };
};

export default useAxios;
