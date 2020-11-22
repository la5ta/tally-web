/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdSWRQueryVariables = {
    store_id?: unknown | null;
    country_id?: unknown | null;
};
export type IdSWRQueryResponse = {
    readonly countries_taxes: ReadonlyArray<{
        readonly _id: unknown;
        readonly abbreviation: string | null;
        readonly description: string | null;
        readonly value: unknown | null;
        readonly country_id: unknown;
    }>;
    readonly products_categories: ReadonlyArray<{
        readonly _id: unknown;
        readonly description: string | null;
    }>;
};
export type IdSWRQuery = {
    readonly response: IdSWRQueryResponse;
    readonly variables: IdSWRQueryVariables;
};



/*
query IdSWRQuery(
  $store_id: uuid = ""
  $country_id: uuid = ""
) {
  countries_taxes(where: {country_id: {_eq: $country_id}}) {
    _id
    abbreviation
    description
    value
    country_id
  }
  products_categories(where: {store_id: {_eq: $store_id}}) {
    _id
    description
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": "",
  "kind": "LocalArgument",
  "name": "country_id"
},
v1 = {
  "defaultValue": "",
  "kind": "LocalArgument",
  "name": "store_id"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = [
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
                "variableName": "country_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "country_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "countries_taxes",
    "kind": "LinkedField",
    "name": "countries_taxes",
    "plural": true,
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "abbreviation",
        "storageKey": null
      },
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "value",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "country_id",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
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
                "variableName": "store_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "store_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "products_categories",
    "kind": "LinkedField",
    "name": "products_categories",
    "plural": true,
    "selections": [
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "IdSWRQuery",
    "selections": (v4/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "IdSWRQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "d7bd2da0d9df52873ba1406e4c1478ef",
    "id": null,
    "metadata": {},
    "name": "IdSWRQuery",
    "operationKind": "query",
    "text": "query IdSWRQuery(\n  $store_id: uuid = \"\"\n  $country_id: uuid = \"\"\n) {\n  countries_taxes(where: {country_id: {_eq: $country_id}}) {\n    _id\n    abbreviation\n    description\n    value\n    country_id\n  }\n  products_categories(where: {store_id: {_eq: $store_id}}) {\n    _id\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = '36b818cb7c9f0f808acf7e0888cb0fde';
export default node;
