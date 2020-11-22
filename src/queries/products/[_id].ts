import { Products_Insert_Input } from "@lib/model";
import { commitMutation, Disposable, Environment, graphql } from "react-relay";

const mutation = graphql`
  mutation IdMutation(
    $cost: numeric = ""
    $country_tax_id: uuid = ""
    $description: String = ""
    $full_name: String = ""
    $price: numeric = ""
    $price_compared: numeric = ""
    $product_category_id: uuid = ""
    $store_id: uuid = ""
  ) {
    insert_products(
      objects: {
        cost: $cost
        country_tax_id: $country_tax_id
        description: $description
        full_name: $full_name
        price: $price
        price_compared: $price_compared
        product_category_id: $product_category_id
        store_id: $store_id
      }
    ) {
      affected_rows
    }
  }
`;

const gqlInsert = ({
  environment,
  cost,
  country_tax_id,
  description,
  full_name,
  price,
  price_compared,
  product_category_id,
  store_id,
}: {
  environment: Environment;
  cost: number;
  country_tax_id: string;
  description: string;
  full_name: string;
  price: number;
  price_compared: number;
  product_category_id: string;
  store_id: string;
}): Promise<Disposable> => {
  const variables: Products_Insert_Input = {
    cost,
    country_tax_id,
    description,
    full_name,
    price,
    price_compared,
    product_category_id,
    store_id,
  };

  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    });
  });
};

const gqlSWRQuery = graphql`
  query IdSWRQuery($store_id: uuid = "", $country_id: uuid = "") {
    countries_taxes(where: { country_id: { _eq: $country_id } }) {
      _id
      abbreviation
      description
      value
      country_id
    }
    products_categories(where: { store_id: { _eq: $store_id } }) {
      _id
      description
    }
  }
`;

const gqlSSRQuery = graphql`
  query IdQuery($_id: uuid) {
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

export { gqlSSRQuery, gqlSWRQuery, gqlInsert };
