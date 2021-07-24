import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { GetPhotos } from '../querys/GetPhotos';
import { Layaout } from '../components/Layout';

export const Home = ({ id }) => {
    const { loading, error, data } = GetPhotos({ id });
    return (
        <Layaout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos'>
            <ListOfCategories />
            <ListOfPhotoCards loading={loading} error={error} data={data} name='photos' />
        </Layaout>
    )
}
