import React from 'react';
import { ImgWrapper, Img, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { ToggleLikeMutationQuery } from '../../querys/ToggleLikeMutationQuery';
import { Link } from '@reach/router';
import propTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE, showLikes = true }) => {
    const [show, element] = useNearScreen();

    const toggleLike = ToggleLikeMutationQuery({ id })

    const handleFavClick = () => {
        toggleLike();
    }

    return (
        <Article ref={element}>
            {
                show &&
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>

                    {
                        showLikes && <FavButton liked={liked} onClick={handleFavClick} likes={likes} />
                    }

                </>
            }
        </Article>
    )
}

PhotoCard.propTypes = {
    id: propTypes.string.isRequired,
    liked: propTypes.bool,
    likes: propTypes.number,
    src: propTypes.string.isRequired,
    showLikes: propTypes.bool
}
