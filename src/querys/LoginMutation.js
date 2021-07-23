import { gql, useMutation } from '@apollo/client';

const useLoginMutation = gql`
    mutation login($input: UserCredentials!) {
        login(input: $input)
    }
`
export const LoginMutation = () => {
    const [loginMutation, { data, loading, error }] = useMutation(useLoginMutation)
    return { loginMutation, data, loading, error }
}
