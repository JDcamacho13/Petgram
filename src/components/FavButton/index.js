import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styles';
import propTypes from 'prop-types';

export const FavButton = ({ liked, likes, onClick }) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Button like={liked} onClick={onClick}>
            <Icon size='32px' /> {likes} Likes!!
        </Button>
    )
}

FavButton.propTypes = {
    liked: propTypes.bool,
    likes: propTypes.number,
    onClick: propTypes.func
}
