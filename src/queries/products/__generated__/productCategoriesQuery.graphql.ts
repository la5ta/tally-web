/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type productCategoriesQueryVariables = {};
export type productCategoriesQueryResponse = {
    readonly products_categories: ReadonlyArray<{
        readonly description: string | null;
        readonly _id: unknown;
    }>;
};
export type productCategoriesQuery = {
    readonly response: productCategoriesQueryResponse;
    readonly variables: productCategoriesQueryVariables;
};



/*
query productCategoriesQuery {
  products_categories(where: {store_id: {_eq: "a5983b60-b894-497b-b553-765976d5568b"}}) {
    description
    _id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "where",
        "value": {
          "store_id": {
            "_eq": "a5983b60-b894-497b-b553-765976d5568b"
          }
        }
      }
    ],
    "concreteType": "products_categories",
    "kind": "LinkedField",
    "name": "products_categories",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      }
    ],
    "storageKey": "products_categories(where:{\"store_id\":{\"_eq\":\"a5983b60-b894-497b-b553-765976d5568b\"}})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "productCategoriesQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "productCategoriesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3612611f3f372f1a529d22e4e1014162",
    "id": null,
    "metadata": {},
    "name": "productCategoriesQuery",
    "operationKind": "query",
    "text": "query productCategoriesQuery {\n  products_categories(where: {store_id: {_eq: \"a5983b60-b894-497b-b553-765976d5568b\"}}) {\n    description\n    _id\n  }\n}\n"
  }
};
})();
(node as any).hash = '8997fe35ee2a47a36915324c6cdfac2c';
export default node;
