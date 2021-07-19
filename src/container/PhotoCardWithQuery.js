import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { Loading } from '../components/Loading';

import { GetSinglePhoto } from '../querys/GetSinglePhoto'

export const PhotoCardWithQuery = ({ id }) => {
    const { loading, error, data } = GetSinglePhoto({ id });

    if (error) {
        return <h2>Error al cargar los datos</h2>
    }

    if (loading) {
        return <Loading />
    }

    return <PhotoCard {...data.photo} />
}
