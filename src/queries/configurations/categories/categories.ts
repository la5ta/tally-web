import { graphql } from 'react-relay';

export default graphql`
query categories_Query {
    stores_categories {
        created_at
        description
        store_id
        _id
    }
}
`;