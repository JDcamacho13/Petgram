import { gql, useMutation } from '@apollo/client';

const ToggleLike = gql`
    mutation likePhoto($input: LikePhoto!) {
        likePhoto(input: $input) {
        id,
        liked,
        likes
        }
    }
`
export const ToggleLikeMutationQuery = ({ id }) => {
    const [ToggleLikeMutation] = useMutation(ToggleLike, { variables: { input: { id } } })
    return ToggleLikeMutation;
}
