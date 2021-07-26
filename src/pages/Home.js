import React from 'react'
import { HomeMain } from '../components/HomeMain';
import { useParams } from '@reach/router';

export const Home = () => {
    const { id } = useParams();
    return (
        <HomeMain categoryId={id} />
    )
}
