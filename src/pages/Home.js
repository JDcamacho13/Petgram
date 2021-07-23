import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { GetPhotos } from '../querys/GetPhotos';

export const Home = ({ id }) => {
    const { loading, error, data } = GetPhotos({ id });
    return (
        <><ListOfCategories /> <ListOfPhotoCards loading={loading} error={error} data={data} name='photos' /></>
    )
}
