import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const gqlServer =
    process.env.NODE_ENV === 'production' ? window.location.host : 5000;

const client = new ApolloClient({
    link: new HttpLink({
        uri: `http://${gqlServer}/graphql`
    }),
    cache: new InMemoryCache()
});

export default client;
