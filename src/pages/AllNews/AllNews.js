import React, { useEffect } from 'react';
import { useGetListNews } from './hooks';
import { useLocalStorage } from '../../hooks';
import { FILTER_SELECTED_KEY } from '../../constants/localStorageKeys';
import { ShowError, News } from '../../components';
import { Select } from './components';

const AllNews = () => {
    const { listNews, getListNews, error } = useGetListNews();
    const { getLocalStorageData, data } = useLocalStorage({ key: FILTER_SELECTED_KEY });

    useEffect(() => {
        getLocalStorageData();
    }, [getLocalStorageData]);

    useEffect(() => {
        getListNews({ value: data });
    }, [getListNews, data]);

    // eslint-disable-next-line no-console
    console.log('listNews', listNews);

    return (
        <div>
            <Select />
            {error && <ShowError error={error} />}
            <div>
                <ul>
                    {listNews?.length &&
                        listNews.map((item) => <News storyTitle={item?.story_title} />)}
                </ul>
            </div>
        </div>
    );
};

export default AllNews;
