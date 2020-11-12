import Layout from '@components/Layouts/Main/Main';
import { NextPage } from 'next';
import React from 'react';
import { Table } from 'react-bootstrap';
import { Products } from '@lib/model';
import { initEnvironment } from '@lib/relay';
import { fetchQuery } from 'react-relay';
import productListQuery from '@queries/products/productList';
import useSWR from 'swr';

const environment = initEnvironment();
const fetcher = () => fetchQuery(environment, productListQuery, {});

interface swrData {
    data?: { products?: Products[]; }
}

const ListPage: NextPage = () => {
    const { data }: swrData = useSWR('productListQuery', fetcher);
    let productsLine = [];
    productsLine.push(
        <tr key="noData">
            <td colSpan={7}>No se encontraron productos</td>
        </tr>
    );

    if (data) {
        const products = data.products;
        productsLine = products.map(product => (
            <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.description}</td>
                <td>{product.full_name}</td>
                <td>{product.price}</td>
                <td>{product.price_compared}</td>
                <td>{product.products_category.description}</td>
                <td>{product.created_at}</td>
            </tr>
        ));
    }

    return (
        <Layout>
            <div className="page-section">
                <h3>Listado de Productos</h3>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Descripcion</th>
                            <th>Nombre Completo</th>
                            <th>Precio</th>
                            <th>Precio a Comparar</th>
                            <th>Categoría</th>
                            <th>Fecha Creado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsLine}
                    </tbody>
                </Table>

            </div>
        </Layout>
    );
};

export default ListPage;
