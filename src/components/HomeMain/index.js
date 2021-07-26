import React from 'react'
import { ListOfCategories } from '../ListOfCategories';
import { ListOfPhotoCards } from '../ListOfPhotoCards';
import { GetPhotos } from '../../querys/GetPhotos';
import { Layaout } from '../Layout';

const HomeMainPage = ({ categoryId }) => {
    const { loading, error, data } = GetPhotos({ categoryId });
    return (
        <Layaout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos'>
            <ListOfCategories />
            <ListOfPhotoCards loading={loading} error={error} data={data} name='photos' />
        </Layaout>
    )
}

export const HomeMain = React.memo(HomeMainPage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
})
