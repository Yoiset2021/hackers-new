import { useCallback, useState } from 'react';

const useLocalStorage = ({ key }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const saveDataAtLocalStorage = useCallback(
        async ({ data: newData }) => {
            try {
                await localStorage.setItem(key, JSON.stringify(newData));
                setLoading(false);
            } catch (err) {
                setError(err);
            }
        },
        [key, setLoading, setError],
    );

    const getLocalStorageData = useCallback(async () => {
        try {
            const element = await localStorage.getItem(key);
            setData(JSON.parse(element));
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [key, setLoading, setError]);

    return {
        getLocalStorageData,
        saveDataAtLocalStorage,
        data,
        loading,
        error,
    };
};

export default useLocalStorage;
