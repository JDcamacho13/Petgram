import React, { useEffect, useState } from 'react';
import { GetFavs } from '../querys/GetFavs';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { Layaout } from '../components/Layout';

export default () => {
    const { loading, error, data } = GetFavs();
    const [favs, setFavs] = useState({ favs: [] })

    useEffect(() => {
        if (data) setFavs(data)
    }, [data])

    return (
        <Layaout title='Tus Favs' subtitle='Aquí puedes ver tus favoritos'>
            <ListOfPhotoCards loading={loading} error={error} data={favs} name='favs' showLikes={false} />
        </Layaout>
    )
}
