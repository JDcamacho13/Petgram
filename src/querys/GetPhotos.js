import { useQuery, gql } from '@apollo/client';

const withPhotos = gql`
    query getPhotos($categoryID: ID) {
        photos(categoryId: $categoryID) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

export const GetPhotos = ({ categoryID }) => {
    const { loading, error, data } = useQuery(withPhotos, { variables: { categoryID } });
    return { loading, error, data };
}
