import { useState, useCallback } from 'react';

import { useAxios } from '../../../hooks';
import { endPointApi } from '../../../constants/endpoints';

const useGetListNews = () => {
    const [listNews, setListNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { getResponse } = useAxios({ url: endPointApi, method: 'GET' });

    const getListNews = useCallback(
        async ({ value }) => {
            try {
                const response = await getResponse({ params: { query: value } });
                // eslint-disable-next-line no-console
                console.log('response', response);

                setListNews(response?.data?.hits);
                setLoading(false);
            } catch (err) {
                // eslint-disable-next-line no-console
                console.log('err', err);
                setError(err?.message);
                setLoading(false);
            }
        },
        [getResponse],
    );

    return { getListNews, listNews, loading, error };
};

export default useGetListNews;
