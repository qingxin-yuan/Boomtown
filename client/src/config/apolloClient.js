import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const gqlServer =
    process.env.NODE_ENV === 'production' ? 5000 : window.location.host;

const client = new ApolloClient({
    link: new HttpLink({
        uri: `http://${gqlServer}/graphql`
    }),
    cache: new InMemoryCache()
});

export default client;
