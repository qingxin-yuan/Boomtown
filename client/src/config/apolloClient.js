import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const port = process.env.NODE_ENV === 'production' ? 80 : 5000;

const client = new ApolloClient({
    link: new HttpLink({
        uri: `http://localhost:${port}/graphql`
    }),
    cache: new InMemoryCache()
});

export default client;
