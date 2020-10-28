
import { initEnvironment } from '@lib/relay';
import { user } from '@models/user';
import indexPageQuery from '@queries/indexPage';
import { NextPage } from 'next';
import React from 'react';
import { Row, Col, Input, Divider, Form } from 'antd';
import { fetchQuery } from 'react-relay';
import MainLayout from '@components/Layouts/Main/Main';

interface Props {
  users?: user[];
}

const IndexPage: NextPage<Props> = ({ users = [] }) => {
  const usersItems = users.map(user =>
    <li key={user._id}>{user.first_name}</li>
  );

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <MainLayout>
      <Row>
        <Col span={24}>
          <h1>Hello there!! <span role="img" aria-label="hand wave">👋</span></h1>

          <h3>Users:</h3>
          <p>{process.env.NEXT_PUBLIC_RELAY_ENDPOINT}</p>
          <ol>
            {usersItems}
          </ol>

          <Divider orientation="left">Sin Etiqueta Form</Divider>
          <div className="input">
            <div className="label">Usuario</div>
            <div className="component"><Input placeholder="josegale@mitienda.com" /></div>
          </div>
          <div className="input">
            <div className="label">Contraseña</div>
            <div className="component"><Input.Password placeholder="Contrasenha12345$" /></div>
          </div>

          <Divider orientation="left">Con Etiqueta Form</Divider>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
        </Col>
      </Row>
    </MainLayout>
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
