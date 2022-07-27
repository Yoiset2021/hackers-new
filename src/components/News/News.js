import React from 'react';
import PropTypes from 'prop-types';

import { PUBLIC_ICON_FOLDER } from '../../constants/icon.route';
import { NewsCard } from './styles';

const News = ({ storyTitle }) => {
    const timeIcon = 'time.svg';
    const favoriteIcon = 'favorite.svg';

    return (
        <NewsCard>
            <div>
                <div>
                    <image href={`${PUBLIC_ICON_FOLDER}/${timeIcon}`} alt={`${timeIcon}`} />
                </div>
                <div>
                    <span>{storyTitle}</span>
                </div>
            </div>
            <div>
                <image href={`${PUBLIC_ICON_FOLDER}/${favoriteIcon}`} alt={`${favoriteIcon}`} />
            </div>
        </NewsCard>
    );
};

News.propTypes = {
    storyTitle: PropTypes.string.isRequired,
};

export default News;
