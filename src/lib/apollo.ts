import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4t8wh0k3101xx21wp8zku/master',
    cache: new InMemoryCache()
})