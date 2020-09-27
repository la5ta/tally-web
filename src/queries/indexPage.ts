import { graphql } from 'react-relay';

export default graphql`
  query indexPage_indexQuery {
    users {
      _id
      first_name
    }
  }
`;
