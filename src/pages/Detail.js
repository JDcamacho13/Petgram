import React from 'react';
import { Layaout } from '../components/Layout';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';

export default ({ detailId }) => {
    return (
        <Layaout title={`Fotografía ${detailId}`}>
            <PhotoCardWithQuery id={detailId} />
        </Layaout>
    )
}
