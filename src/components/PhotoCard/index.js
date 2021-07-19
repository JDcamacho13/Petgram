import React from 'react';
import { ImgWrapper, Img, Article } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { ToggleLikeMutationQuery } from '../../querys/ToggleLikeMutationQuery';
import { Link } from '@reach/router';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen();
    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false);
    const toggleLike = ToggleLikeMutationQuery({ id })

    const handleFavClick = () => {
        setLiked(!liked);
        !liked && toggleLike();
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

                    <FavButton liked={liked ? 1 : 0} onClick={handleFavClick} likes={likes} />
                </>
            }
        </Article>
    )
}
