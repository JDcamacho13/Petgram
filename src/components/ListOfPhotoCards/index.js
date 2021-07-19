import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { Loading } from '../Loading';

import { GetPhotos } from '../../querys/GetPhotos';

export const ListOfPhotoCards = ({ categoryID }) => {
    const { loading, error, data } = GetPhotos({ categoryID });

    if (error) {
        return <h2>Error al cargar los datos</h2>
    }

    if (loading) {
        return <Loading />
    }

    return (
        <ul>
            {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
        </ul>
    )
}
