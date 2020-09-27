/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type indexPage_indexQueryVariables = {};
export type indexPage_indexQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly _id: unknown;
        readonly first_name: string | null;
    }>;
};
export type indexPage_indexQuery = {
    readonly response: indexPage_indexQueryResponse;
    readonly variables: indexPage_indexQueryVariables;
};



/*
query indexPage_indexQuery {
  users {
    _id
    first_name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "users",
    "kind": "LinkedField",
    "name": "users",
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
        "name": "first_name",
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
    "name": "indexPage_indexQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "indexPage_indexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "dd1516d2b893a64c96c6e444fd1d7a6f",
    "id": null,
    "metadata": {},
    "name": "indexPage_indexQuery",
    "operationKind": "query",
    "text": "query indexPage_indexQuery {\n  users {\n    _id\n    first_name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ce9559627d7f839622f7384bc3fb27a8';
export default node;
