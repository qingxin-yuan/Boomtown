import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink({
        uri: `http://localhost:${process.env.PORT || '3002'}/graphql`
    }),
    cache: new InMemoryCache()
});

export default client;
