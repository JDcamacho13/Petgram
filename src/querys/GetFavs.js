import { useQuery, gql } from '@apollo/client';

const useGetFavs = gql`
    query getFavs {
        favs {
        id
        categoryId
        src
        likes
        userId
        }
    }
`

export const GetFavs = () => {
    const { loading, data, error } = useQuery(useGetFavs, { fetchPolicy: 'network-only' });
    return { loading, data, error };
}
