/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdMutationVariables = {
    cost?: unknown | null;
    country_tax_id?: unknown | null;
    description?: string | null;
    full_name?: string | null;
    price?: unknown | null;
    price_compared?: unknown | null;
    product_category_id?: unknown | null;
    store_id?: unknown | null;
};
export type IdMutationResponse = {
    readonly insert_products: {
        readonly affected_rows: number;
    } | null;
};
export type IdMutation = {
    readonly response: IdMutationResponse;
    readonly variables: IdMutationVariables;
};



/*
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
  insert_products(objects: {cost: $cost, country_tax_id: $country_tax_id, description: $description, full_name: $full_name, price: $price, price_compared: $price_compared, product_category_id: $product_category_id, store_id: $store_id}) {
    affected_rows
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "cost"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "country_tax_id"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "description"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "full_name"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "price"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "price_compared"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "product_category_id"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "store_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "cost",
            "variableName": "cost"
          },
          {
            "kind": "Variable",
            "name": "country_tax_id",
            "variableName": "country_tax_id"
          },
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description"
          },
          {
            "kind": "Variable",
            "name": "full_name",
            "variableName": "full_name"
          },
          {
            "kind": "Variable",
            "name": "price",
            "variableName": "price"
          },
          {
            "kind": "Variable",
            "name": "price_compared",
            "variableName": "price_compared"
          },
          {
            "kind": "Variable",
            "name": "product_category_id",
            "variableName": "product_category_id"
          },
          {
            "kind": "Variable",
            "name": "store_id",
            "variableName": "store_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "objects"
      }
    ],
    "concreteType": "products_mutation_response",
    "kind": "LinkedField",
    "name": "insert_products",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affected_rows",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IdMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IdMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c461d3f374166100b3d25cd3640ab6cc",
    "id": null,
    "metadata": {},
    "name": "IdMutation",
    "operationKind": "mutation",
    "text": "mutation IdMutation(\n  $cost: numeric = \"\"\n  $country_tax_id: uuid = \"\"\n  $description: String = \"\"\n  $full_name: String = \"\"\n  $price: numeric = \"\"\n  $price_compared: numeric = \"\"\n  $product_category_id: uuid = \"\"\n  $store_id: uuid = \"\"\n) {\n  insert_products(objects: {cost: $cost, country_tax_id: $country_tax_id, description: $description, full_name: $full_name, price: $price, price_compared: $price_compared, product_category_id: $product_category_id, store_id: $store_id}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
(node as any).hash = '92e07fcd1d7c3ae718742390bf7d1c7d';
export default node;
