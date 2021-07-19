import { gql, useQuery } from '@apollo/client';

const getSinglePhotoQuery = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
        id
        categoryId
        src
        likes
        liked
        userId
        }
    }
`

export const GetSinglePhoto = ({ id }) => {
    const { loading, error, data } = useQuery(getSinglePhotoQuery, { variables: { id } });
    return { loading, error, data }
}
