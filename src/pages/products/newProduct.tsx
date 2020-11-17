import Layout from "@components/Layouts/Main/Main";
import { NextPage } from "next";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useSWR from "swr";
import { initEnvironment } from "@lib/relay";
import { fetchQuery } from "react-relay";
import productCategoriesQuery from "@queries/products/productCategories";
import { Countries_Taxes, Products_Categories } from "@lib/model";
import insertProducts from "@queries/products/insertProduct";
import countryTaxesQuery from "@queries/country_taxes/countryTaxesQuery";

const environment = initEnvironment();
const fetcher = () => fetchQuery(environment, productCategoriesQuery, {});
const fetcherCountryTaxes = () =>
  fetchQuery(environment, countryTaxesQuery, {});

interface swrData {
  data?: { products_categories?: Products_Categories[] };
}

function useProductCategories() {
  const { data }: swrData = useSWR("productCategoriesQuery", fetcher);
  return data ? data.products_categories : null;
}

interface swrCountryTaxes {
  data?: { countries_taxes?: Countries_Taxes[] };
}

function useCountryTaxes() {
  const { data }: swrCountryTaxes = useSWR(
    "countryTaxesQuery",
    fetcherCountryTaxes
  );
  return data ? data.countries_taxes : null;
}

const NewProductPage: NextPage = () => {
  const categories = useProductCategories();
  const taxes = useCountryTaxes();
  let categoriesLine = [];
  let countryTaxesLine = [];
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [countryTax, setCountryTax] = useState("");

  // Search and show the categories
  categoriesLine.push(
    <option key="" value="">
      Seleccione una categoría
    </option>
  );
  if (categories) {
    categoriesLine = [
      ...categoriesLine,
      ...categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.description}
        </option>
      )),
    ];
  }

  // Search and show Countries Taxes
  countryTaxesLine.push(
    <option key="" value="">
      Seleccione el tipo de impuesto
    </option>
  );
  if (taxes) {
    countryTaxesLine = [
      ...countryTaxesLine,
      ...taxes.map((tax) => (
        <option key={tax._id} value={tax._id}>
          {tax.abbreviation}
        </option>
      )),
    ];
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    insertProducts({
      environment,
      cost,
      country_tax_id: "e7466c55-8597-4658-82eb-b034ab989780",
      description,
      full_name: fullName,
      price,
      price_compared: price,
      product_category_id: productCategory,
      store_id: "a5983b60-b894-497b-b553-765976d5568b",
    });
  };
  return (
    <Layout>
      <div className="page-section">
        <h3>Nuevo Producto</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Blonde Ale"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Breve descripcion del producto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              {categoriesLine}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Impuesto</Form.Label>
            <Form.Control
              as="select"
              value={countryTax}
              onChange={(e) => setCountryTax(e.target.value)}
            >
              {countryTaxesLine}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej. 75.00"
              value={price}
              onChange={(e) => setPrice(Number.parseInt(e.target.value))}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Costo</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej. 50.00"
              value={cost}
              onChange={(e) => setCost(Number.parseInt(e.target.value))}
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

export default NewProductPage;
