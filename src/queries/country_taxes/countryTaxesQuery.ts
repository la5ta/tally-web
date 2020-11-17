import { graphql } from "react-relay";

export default graphql`
  query countryTaxesQuery {
    countries_taxes {
      _id
      abbreviation
      country_id
      description
      value
    }
  }
`;
