import { graphql } from "react-relay";

export default graphql`
  query productList_ListQuery($_id: uuid) {
    products(where: { _id: { _eq: $_id } }) {
      _id
      cost
      country_tax_id
      created_at
      description
      full_name
      price
      price_compared
      product_category_id
      store_id
      products_category {
        description
      }
    }
  }
`;
