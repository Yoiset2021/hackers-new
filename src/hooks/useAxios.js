import { useCallback } from 'react';
import axiosInstance from './helpers/axiosInstance';

const useAxios = ({ url, method }) => {
    const getResponse = useCallback(
        async ({ params }) => {
            const response = await axiosInstance({ url, method, params });
            return response;
        },
        [method, url],
    );
    return { getResponse };
};

export default useAxios;
