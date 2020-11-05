/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type categories_QueryVariables = {};
export type categories_QueryResponse = {
    readonly stores_categories: ReadonlyArray<{
        readonly created_at: unknown | null;
        readonly description: string | null;
        readonly store_id: unknown;
        readonly _id: unknown;
    }>;
};
export type categories_Query = {
    readonly response: categories_QueryResponse;
    readonly variables: categories_QueryVariables;
};



/*
query categories_Query {
  stores_categories {
    created_at
    description
    store_id
    _id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "stores_categories",
    "kind": "LinkedField",
    "name": "stores_categories",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
        "storageKey": null
      },
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
        "name": "store_id",
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "categories_Query",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "categories_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7db70ad28ac63f1c48fcf31f3ce0817d",
    "id": null,
    "metadata": {},
    "name": "categories_Query",
    "operationKind": "query",
    "text": "query categories_Query {\n  stores_categories {\n    created_at\n    description\n    store_id\n    _id\n  }\n}\n"
  }
};
})();
(node as any).hash = '7117bdf42ce4082376ebace82628f4d6';
export default node;
