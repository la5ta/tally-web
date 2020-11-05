import React from 'react';
import Layout from '@components/Layouts/Main/Main';
import { NextPage } from 'next';
import categoriesQuery from '@queries/configurations/categories/categories';
import { initEnvironment } from '@lib/relay';
import { fetchQuery } from 'react-relay';
import { store_category } from '@models/store_category';

interface Props {
    categories?: store_category[];
}

const CategoriesPage: NextPage<Props> = ({ categories = [] }) => {
    console.log(categories);
    const store_categories = categories.map(category =>
        <li key={category._id}>{category.description}</li>
    );

    return (
        <Layout>
            <h4>Categorías</h4>
            {store_categories}
        </Layout>
    );
};

export async function getStaticProps(): Promise<unknown> {
    const environment = initEnvironment();
    const queryProps = await fetchQuery(environment, categoriesQuery, {});
    const initialRecords = environment.getStore().getSource().toJSON();

    console.log((queryProps));
    return {
        props: {
            ...(queryProps as { categories: store_category[]; }),
            initialRecords,
        },
    };
}

export default CategoriesPage;
