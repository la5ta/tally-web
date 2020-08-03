/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type indexPage_indexQueryVariables = {||};
export type indexPage_indexQueryResponse = {|
  +users: $ReadOnlyArray<{|
    +id: any,
    +name: string,
    +email: string,
  |}>
|};
export type indexPage_indexQuery = {|
  variables: indexPage_indexQueryVariables,
  response: indexPage_indexQueryResponse,
|};
*/


/*
query indexPage_indexQuery {
  users {
    id
    name
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
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
    "cacheID": "120b04d66252e8da2e8506da57666a62",
    "id": null,
    "metadata": {},
    "name": "indexPage_indexQuery",
    "operationKind": "query",
    "text": "query indexPage_indexQuery {\n  users {\n    id\n    name\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f0513c394de91ef73002c65e45e5c9d';

module.exports = node;
