/**
 * @generated SignedSource<<dc447b437e9f4fe8f25ddacfa2874b24>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesPublicProductsQuery$variables = {};
export type pagesPublicProductsQuery$data = {
  readonly products: {
    readonly hasMore: boolean;
    readonly publicProducts: ReadonlyArray<{
      readonly uuid: string;
      readonly id: number;
      readonly createdAt: string;
      readonly updatedAt: string;
      readonly name: string;
      readonly price: number;
      readonly quantity: number;
      readonly imageUrl: string;
      readonly isSold: boolean;
      readonly isPublic: boolean;
      readonly deleted: boolean;
    }>;
  };
};
export type pagesPublicProductsQuery = {
  variables: pagesPublicProductsQuery$variables;
  response: pagesPublicProductsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "isPublic",
        "value": true
      },
      {
        "kind": "Literal",
        "name": "limit",
        "value": 15
      }
    ],
    "concreteType": "PaginatedProducts",
    "kind": "LinkedField",
    "name": "products",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasMore",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "publicProducts",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uuid",
            "storageKey": null
          },
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
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
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
            "name": "price",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "quantity",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imageUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isSold",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPublic",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "deleted",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "products(isPublic:true,limit:15)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesPublicProductsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesPublicProductsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ee28c3bf62ce27343e8d1708c5cc55b7",
    "id": null,
    "metadata": {},
    "name": "pagesPublicProductsQuery",
    "operationKind": "query",
    "text": "query pagesPublicProductsQuery {\n  products(isPublic: true, limit: 15) {\n    hasMore\n    publicProducts {\n      uuid\n      id\n      createdAt\n      updatedAt\n      name\n      price\n      quantity\n      imageUrl\n      isSold\n      isPublic\n      deleted\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8cd9e72360f67893e5366704d2c40f70";

export default node;
