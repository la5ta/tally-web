import { useMemo } from 'react';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes';
import { request } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';

let relayEnvironment: Environment;

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise
async function fetchQuery(operation: { text: unknown }, variables: unknown) {
  const response = await fetch(process.env.NEXT_PUBLIC_RELAY_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return await response.json();
}

// TODO: [eslint] add or remove `initialRecords` from this function
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createEnvironment(initialRecords: unknown) {
  return new Environment({
    // Create a network layer from the fetch function
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });
}

export function initEnvironment(initialRecords?: RecordMap): Environment {
  // Create a network layer from the fetch function
  const environment = relayEnvironment ?? createEnvironment(initialRecords);

  // If your page has Next.js data fetching methods that use Relay, the initial records
  // will get hydrated here
  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords));
  }
  // For SSG and SSR always create a new Relay environment
  if (typeof window === 'undefined') return environment;
  // Create the Relay environment once in the client
  if (!relayEnvironment) relayEnvironment = environment;

  return relayEnvironment;
}

// TODO: [eslint] add a return type for `useEnvironment()`
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useEnvironment(initialRecords: RecordMap) {
  const store = useMemo(() => initEnvironment(initialRecords), [
    initialRecords,
  ]);
  return store;
}

// Fetcher for Usr
export function fetcher<T>(query: RequestDocument): Promise<T> {
  return request<T>(process.env.NEXT_PUBLIC_RELAY_ENDPOINT, query);
}
