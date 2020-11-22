import Layout from '@components/Layouts/Main/Main';
import { NextPage } from 'next';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useSWR from 'swr';
import { initEnvironment } from '@lib/relay';
import { fetchQuery } from 'react-relay';
import { Countries_Taxes, Products, Products_Categories } from '@lib/model';
import { gqlSSRQuery, gqlSWRQuery, gqlInsert } from '@queries/products/[_id]';
import { Toast } from 'react-bootstrap';

const environment = initEnvironment();
const fetcher = () =>
  fetchQuery(environment, gqlSWRQuery, {
    store_id: 'a5983b60-b894-497b-b553-765976d5568b',
    country_id: '457c3df5-3efd-4838-9f26-43c28dad02cb',
  });

interface swrData {
  data?: {
    products_categories?: Products_Categories[];
    countries_taxes?: Countries_Taxes[];
  };
}
interface Props {
  products?: Products[];
}

const initialState = {
  full_name: '',
  description: '',
  price: 0,
  cost: 0,
  product_category_id: '',
  country_tax_id: '',
};

const EditPage: NextPage<Props> = ({ products = [] }) => {
  const [showToast, setShowToast] = useState(false);
  let categoriesLine = [];
  let countryTaxesLine = [];

  const {
    data: { products_categories, countries_taxes } = {
      products_categories: [],
      countries_taxes: [],
    },
  }: swrData = useSWR('editPageQuery', fetcher);

  const [
    {
      full_name,
      description,
      price,
      cost,
      product_category_id,
      country_tax_id,
    },
    setState,
  ] = useState(products.length ? products[0] : initialState);

  const onChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
  };

  const createOpt = ({
    key = '',
    value = '',
    text = 'Seleccione una categoría',
  }) => (
    <option key={key} value={value}>
      {text}
    </option>
  );

  // Search and show the categories
  categoriesLine = [
    createOpt({ text: 'Seleccione una categoría' }),
    ...products_categories.map((category) =>
      createOpt({
        key: category._id,
        value: category._id,
        text: category.description,
      })
    ),
  ];

  // Search and show Countries Taxes
  countryTaxesLine = [
    createOpt({ text: 'Seleccione el tipo de impuesto' }),
    ...countries_taxes.map((tax) =>
      createOpt({
        key: tax._id,
        value: tax._id,
        text: tax.abbreviation,
      })
    ),
  ];

  // const handleSubmit = (event) => {
  async function handleSubmit(evt) {
    let mutationResult;

    evt.preventDefault();

    try {
      mutationResult = await gqlInsert({
        environment,
        cost,
        country_tax_id,
        description,
        full_name,
        price,
        price_compared: price,
        product_category_id,
        store_id: 'a5983b60-b894-497b-b553-765976d5568b',
      });

      console.log(mutationResult);
      setShowToast(true);
      clearState();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Layout>
      {/* TODO: Notifications should be handled globally, not here */}
      <Toast show={showToast} onClose={() => setShowToast(!showToast)}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, youre reading this text in a Toast!</Toast.Body>
      </Toast>

      <div className="page-section">
        <h3>Nuevo Producto</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              name="full_name"
              placeholder="Ej. Blonde Ale"
              value={full_name}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              placeholder="Breve descripcion del producto"
              value={description}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              name="product_category_id"
              value={product_category_id}
              onChange={onChange}
            >
              {categoriesLine}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Impuesto</Form.Label>
            <Form.Control
              as="select"
              name="country_tax_id"
              value={country_tax_id}
              onChange={onChange}
            >
              {countryTaxesLine}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej. 75.00"
              name="price"
              value={price}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Costo</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej. 50.00"
              name="cost"
              value={cost}
              onChange={onChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(params: {
  query: { _id: string };
}): Promise<unknown> {
  let queryProps = {};
  const { _id } = params.query;
  const environment = initEnvironment();
  const initialRecords = environment.getStore().getSource().toJSON();

  if (_id !== 'new') {
    queryProps = await fetchQuery(environment, gqlSSRQuery, {
      _id,
    });
  }

  return {
    props: {
      ...(queryProps as { products: Products[] }),
      initialRecords,
    },
  };
}

export default EditPage;
