import { useQuery, gql } from '@apollo/client';

const withPhotos = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

export const GetPhotos = ({ categoryId }) => {
    const { loading, error, data } = useQuery(withPhotos, { variables: { categoryId: categoryId } });
    return { loading, error, data };
}
