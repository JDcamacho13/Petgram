import React from 'react';
import ReactDom from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { App } from './App.js';
import Context from './Context';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
    uri: 'https://petgram-server-jd-camacho.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
    const token = window.sessionStorage.getItem('token')

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    onError: onError(({ networkError }) => {
        if (networkError && networkError.result.code === 'invalid_token') {
            window.sessionStorage.removeItem('token')
            window.location = '/user'
        }
    })
})

ReactDom.render(
    <ApolloProvider client={client}>
        <Context.Provider>
            <App />
        </Context.Provider>
    </ApolloProvider>, document.getElementById('app')
);
