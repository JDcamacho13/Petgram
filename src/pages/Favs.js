import React, { useEffect, useState } from 'react';
import { GetFavs } from '../querys/GetFavs';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

export const Favs = () => {
    const { loading, error, data } = GetFavs();
    const [favs, setFavs] = useState({ favs: [] })

    useEffect(() => {
        if (data) setFavs(data)
    }, [data])

    return (
        <ListOfPhotoCards loading={loading} error={error} data={favs} name='favs' showLikes={false} />
    )
}
