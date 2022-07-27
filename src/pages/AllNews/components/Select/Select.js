import React, { useState } from 'react';
import { useGetListNews } from '../../hooks';
import { useLocalStorage } from '../../../../hooks';
import { FILTER_SELECTED_KEY } from '../../../../constants/localStorageKeys';

const Select = () => {
    const [valueSelect, setValueSelect] = useState('');
    const { getListNews } = useGetListNews();
    const { saveDataAtLocalStorage } = useLocalStorage({ key: FILTER_SELECTED_KEY });

    const handleChangeSelect = (event) => {
        setValueSelect(event.target.value);
        if (valueSelect) {
            getListNews({ value: valueSelect });
            saveDataAtLocalStorage({ data: valueSelect });
        }
    };

    return (
        <div>
            <select
                name="select"
                value={valueSelect}
                onChange={(event) => handleChangeSelect(event)}
            >
                <option value="">Select your news</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
            </select>
        </div>
    );
};

export default Select;
