import { graphql } from "react-relay";

export default graphql`
  query productCategoriesQuery {
    products_categories(
      where: { store_id: { _eq: "a5983b60-b894-497b-b553-765976d5568b" } }
    ) {
      description
      _id
    }
  }
`;
