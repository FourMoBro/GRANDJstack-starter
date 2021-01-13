import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

import App from './App';
import reportWebVitals from './reportWebVitals';

// Setp Apollo Server GraphQL enpoint URI
const httpLink = createHttpLink({
  uri: 'http://localhost:4001/graphql',
})

// Get the token and the headers from the Django Login
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('refresh_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

// Use the token for all requests to the GraphQL server
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render((
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>

), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
