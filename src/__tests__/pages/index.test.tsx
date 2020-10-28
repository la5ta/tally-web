import indexPageQuery from '@queries/indexPage';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import ReactTestRenderer from 'react-test-renderer';
import {
  createMockEnvironment,
  MockPayloadGenerator,
  RelayMockEnvironment
} from 'relay-test-utils';
import Index, { getStaticProps } from '../../pages/index';

describe('Index', () => {
  let testComponent: ReactTestRenderer.ReactTestRenderer;
  let environment: RelayMockEnvironment;

  beforeEach(() => {
    environment = createMockEnvironment();

    const renderQuery = (renderProps) => {
      const users = renderProps.props && renderProps.props.users || [];

      return <Index users={users} />;
    };

    const IndexRenderer = () => (
      <QueryRenderer
        environment={environment}
        query={indexPageQuery}
        variables={{}}
        render={renderQuery}
      />
    );

    testComponent = ReactTestRenderer.create(<IndexRenderer />);
    environment.mock.resolveMostRecentOperation((operation) => MockPayloadGenerator.generate(operation));
  });

  it('should render the index with data', () => {
    expect(testComponent.toJSON()).toMatchSnapshot();
  });

  it('should getStaticProps return an Object', async () => {

    const { Response } = jest.requireActual('node-fetch');
    const ResponseInit = {
      status: 200,
      statusText: 'fail',
      // headers: headers
    };
    const downloadDocumentData = { data: { users: [] } };
    const response: Response = new Response(JSON.stringify(downloadDocumentData), ResponseInit);
    global.fetch = jest.fn(() => Promise.resolve(response));

    const result = await getStaticProps();
    expect(result).toBeInstanceOf(Object);
  });
});