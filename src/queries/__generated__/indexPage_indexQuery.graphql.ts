/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type indexPage_indexQueryVariables = {};
export type indexPage_indexQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: unknown;
        readonly name: string;
    }>;
};
export type indexPage_indexQuery = {
    readonly response: indexPage_indexQueryResponse;
    readonly variables: indexPage_indexQueryVariables;
};



/*
query indexPage_indexQuery {
  users {
    id
    name
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
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
    "cacheID": "4624fe91ac06bc1a5d2df4ad4a53653e",
    "id": null,
    "metadata": {},
    "name": "indexPage_indexQuery",
    "operationKind": "query",
    "text": "query indexPage_indexQuery {\n  users {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '2d91be1d5293c8876c6829c0718b8a0f';
export default node;
