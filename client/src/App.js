import Landing from './pages/Landing';
import Login from './pages/Login';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log(`Graphql erro ${message}, ${location}, ${path}`)
      return <div></div>;
    })
  };

})

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_API_URL })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})




function App() {


  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>

  );
}

export default App;
