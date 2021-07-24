import React from 'react';
import { Layaout } from '../components/Layout';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';

export const Detail = ({ detailId }) => {
    return (
        <Layaout title={`Fotografía ${detailId}`}>
            <PhotoCardWithQuery id={detailId} />
        </Layaout>
    )
}
