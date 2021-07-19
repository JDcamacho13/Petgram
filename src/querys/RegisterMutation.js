import { gql, useMutation } from '@apollo/client';

const useRegisterMutation = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`

export const RegisterMutation = () => {
    const [registerMutation, { data, loading, error }] = useMutation(useRegisterMutation)
    return { registerMutation, data, loading, error }
}
