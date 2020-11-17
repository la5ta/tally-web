/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type countryTaxesQueryVariables = {};
export type countryTaxesQueryResponse = {
    readonly countries_taxes: ReadonlyArray<{
        readonly _id: unknown;
        readonly abbreviation: string | null;
        readonly country_id: unknown;
        readonly description: string | null;
        readonly value: unknown | null;
    }>;
};
export type countryTaxesQuery = {
    readonly response: countryTaxesQueryResponse;
    readonly variables: countryTaxesQueryVariables;
};



/*
query countryTaxesQuery {
  countries_taxes {
    _id
    abbreviation
    country_id
    description
    value
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "countries_taxes",
    "kind": "LinkedField",
    "name": "countries_taxes",
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
        "name": "abbreviation",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "country_id",
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
        "name": "value",
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
    "name": "countryTaxesQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "countryTaxesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ef3acd64aed51a69ec9160de581bc960",
    "id": null,
    "metadata": {},
    "name": "countryTaxesQuery",
    "operationKind": "query",
    "text": "query countryTaxesQuery {\n  countries_taxes {\n    _id\n    abbreviation\n    country_id\n    description\n    value\n  }\n}\n"
  }
};
})();
(node as any).hash = '7b0b4c6ed94f7dd08e5a589021be8406';
export default node;
