import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { Loading } from '../Loading';
import { Ul } from './styles';

export const ListOfPhotoCards = ({ loading, data, error, name, showLikes = true }) => {
    if (error) {
        return <h2>Error al cargar los datos</h2>
    }

    if (loading) {
        return <Loading />
    }

    return (
        <Ul>
            {data[name].map(photo => <PhotoCard key={photo.id} {...photo} showLikes={showLikes} />)}
        </Ul>
    )
}
