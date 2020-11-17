import { Products_Insert_Input } from "@lib/model";
import Router from "next/router";
import { commitMutation, Environment, graphql } from "react-relay";

const mutation = graphql`
  mutation insertProductsMutation(
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

function insertProducts({
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
}): void {
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

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response) => {
      console.log("Response received from server.", response);
      Router.push("/products/list");
    },
    onError: (err) => {
      console.error(err);
    },
  });
}

export default insertProducts;
