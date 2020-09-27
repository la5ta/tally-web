import Layout from '@components/Layout';
import { initEnvironment } from '@lib/relay';
import { user } from '@models/user';
import indexPageQuery from '@queries/indexPage';
import { NextPage } from 'next';
import React from 'react';
import { fetchQuery } from 'react-relay';

interface Props {
  users?: user[];
}

const IndexPage: NextPage<Props> = ({ users = [] }) => {
  const usersItems = users.map(user =>
    <li key={user._id}>{user.first_name}</li>
  );

  return (
    <Layout>
      <h1>Hello there!! <span role="img" aria-label="hand wave">👋</span></h1>

      <h3>Users:</h3>
      <p>{process.env.NEXT_PUBLIC_RELAY_ENDPOINT}</p>
      <ol>
        {usersItems}
      </ol>
    </Layout>
  );
};

export async function getStaticProps(): Promise<unknown> {
  const environment = initEnvironment();
  const queryProps = await fetchQuery(environment, indexPageQuery, {});
  const initialRecords = environment.getStore().getSource().toJSON();

  return {
    props: {
      ...(queryProps as { users: user[]; }),
      initialRecords,
    },
  };
}

export default IndexPage;
