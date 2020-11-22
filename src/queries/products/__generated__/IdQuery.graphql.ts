/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdQueryVariables = {
    _id?: unknown | null;
};
export type IdQueryResponse = {
    readonly products: ReadonlyArray<{
        readonly _id: unknown;
        readonly cost: unknown | null;
        readonly country_tax_id: unknown;
        readonly created_at: unknown | null;
        readonly description: string | null;
        readonly full_name: string | null;
        readonly price: unknown | null;
        readonly price_compared: unknown | null;
        readonly product_category_id: unknown;
        readonly store_id: unknown;
        readonly products_category: {
            readonly description: string | null;
        };
    }>;
};
export type IdQuery = {
    readonly response: IdQueryResponse;
    readonly variables: IdQueryVariables;
};



/*
query IdQuery(
  $_id: uuid
) {
  products(where: {_id: {_eq: $_id}}) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "products",
    "kind": "LinkedField",
    "name": "products",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cost",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "country_tax_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
        "storageKey": null
      },
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "full_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price_compared",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "product_category_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "store_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "products_categories",
        "kind": "LinkedField",
        "name": "products_category",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
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
    "name": "IdQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IdQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bd04dcd01a28827708c61b4a32b29bf7",
    "id": null,
    "metadata": {},
    "name": "IdQuery",
    "operationKind": "query",
    "text": "query IdQuery(\n  $_id: uuid\n) {\n  products(where: {_id: {_eq: $_id}}) {\n    _id\n    cost\n    country_tax_id\n    created_at\n    description\n    full_name\n    price\n    price_compared\n    product_category_id\n    store_id\n    products_category {\n      description\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ebedc218e19d073ac5de3d0589246d3e';
export default node;
